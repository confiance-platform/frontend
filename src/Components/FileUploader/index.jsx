// File Uploader Component with Drag & Drop and Preview
import React, { useState, useRef, useCallback } from 'react';
import { Card, CardBody, Button, Progress, Alert, Row, Col } from 'reactstrap';
import { fileService } from '../../Services/fileService';
import { useAuth } from '../../context/AuthContext';

const FileUploader = ({
  accept = 'image/*,application/pdf,.doc,.docx',
  maxSize = 10 * 1024 * 1024, // 10MB
  multiple = false,
  entityType = 'general',
  entityId = null,
  folder = 'uploads',
  onUploadSuccess,
  onUploadError,
  showPreview = true,
  className = '',
}) => {
  const { user } = useAuth();
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [error, setError] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  }, []);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
    // Reset input
    e.target.value = '';
  };

  const handleFiles = (selectedFiles) => {
    setError('');

    // Validate files
    const validFiles = [];
    for (const file of selectedFiles) {
      if (file.size > maxSize) {
        setError(`File "${file.name}" exceeds maximum size of ${fileService.formatFileSize(maxSize)}`);
        continue;
      }
      validFiles.push({
        file,
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
        status: 'pending',
      });
    }

    if (multiple) {
      setFiles((prev) => [...prev, ...validFiles]);
    } else {
      // Clear old previews
      files.forEach((f) => {
        if (f.previewUrl) URL.revokeObjectURL(f.previewUrl);
      });
      setFiles(validFiles.slice(0, 1));
    }
  };

  const uploadFile = async (fileItem) => {
    if (!user?.userId) {
      setError('Please login to upload files');
      return;
    }

    const { file, id } = fileItem;

    setUploadProgress((prev) => ({ ...prev, [id]: 0 }));
    setFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: 'uploading' } : f))
    );

    try {
      let response;
      const options = {
        userId: user.userId,
        entityType,
        entityId,
        folder,
      };

      if (fileService.isImage(file)) {
        response = await fileService.uploadImage(file, options);
      } else if (fileService.isDocument(file)) {
        response = await fileService.uploadDocument(file, options);
      } else if (fileService.isVideo(file)) {
        response = await fileService.uploadVideo(file, options);
      } else {
        response = await fileService.upload(file, options);
      }

      // Simulate progress (since we don't have real progress tracking)
      setUploadProgress((prev) => ({ ...prev, [id]: 100 }));

      setFiles((prev) =>
        prev.map((f) => (f.id === id ? { ...f, status: 'completed' } : f))
      );

      setUploadedFiles((prev) => [...prev, response.data]);

      if (onUploadSuccess) {
        onUploadSuccess(response);
      }

      return response;
    } catch (err) {
      setFiles((prev) =>
        prev.map((f) =>
          f.id === id ? { ...f, status: 'error', error: err.message } : f
        )
      );

      if (onUploadError) {
        onUploadError(err);
      }

      throw err;
    }
  };

  const uploadAllFiles = async () => {
    const pendingFiles = files.filter((f) => f.status === 'pending');

    for (const fileItem of pendingFiles) {
      try {
        await uploadFile(fileItem);
      } catch (err) {
        // Continue with other files even if one fails
        console.error('Upload error:', err);
      }
    }
  };

  const removeFile = (id) => {
    setFiles((prev) => {
      const file = prev.find((f) => f.id === id);
      if (file?.previewUrl) {
        URL.revokeObjectURL(file.previewUrl);
      }
      return prev.filter((f) => f.id !== id);
    });
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
  };

  const getFileIcon = (file) => {
    if (file.type.startsWith('image/')) return 'bi-image';
    if (file.type.includes('pdf')) return 'bi-file-pdf';
    if (file.type.includes('word') || file.type.includes('doc')) return 'bi-file-word';
    if (file.type.includes('excel') || file.type.includes('spreadsheet')) return 'bi-file-excel';
    if (file.type.startsWith('video/')) return 'bi-camera-video';
    return 'bi-file-earmark';
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'uploading':
        return <span className="badge bg-warning">Uploading...</span>;
      case 'completed':
        return <span className="badge bg-success">Uploaded</span>;
      case 'error':
        return <span className="badge bg-danger">Failed</span>;
      default:
        return <span className="badge bg-secondary">Pending</span>;
    }
  };

  return (
    <div className={`file-uploader ${className}`}>
      {error && (
        <Alert color="danger" isOpen={!!error} toggle={() => setError('')} className="mb-3">
          {error}
        </Alert>
      )}

      {/* Drop Zone */}
      <Card
        className={`drop-zone ${isDragging ? 'border-primary bg-light' : ''}`}
        style={{
          border: '2px dashed #ccc',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <CardBody className="text-center py-5">
          <i className="bi bi-cloud-upload display-4 text-muted mb-3" style={{ fontSize: '48px' }}></i>
          <h5 className="mb-2">Drag & Drop files here</h5>
          <p className="text-muted mb-3">or click to browse</p>
          <Button color="primary" size="sm" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>
            Browse Files
          </Button>
          <p className="text-muted mt-3 mb-0">
            <small>Max file size: {fileService.formatFileSize(maxSize)}</small>
          </p>
        </CardBody>
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />

      {/* File List */}
      {files.length > 0 && (
        <Card className="mt-3">
          <CardBody>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">Files ({files.length})</h6>
              {files.some((f) => f.status === 'pending') && (
                <Button color="primary" size="sm" onClick={uploadAllFiles}>
                  Upload All
                </Button>
              )}
            </div>

            {files.map((fileItem) => (
              <div key={fileItem.id} className="file-item border rounded p-3 mb-2">
                <Row className="align-items-center">
                  {/* Preview */}
                  <Col xs="auto">
                    {showPreview && fileItem.previewUrl ? (
                      <img
                        src={fileItem.previewUrl}
                        alt={fileItem.file.name}
                        style={{
                          width: '50px',
                          height: '50px',
                          objectFit: 'cover',
                          borderRadius: '5px',
                        }}
                      />
                    ) : (
                      <div
                        className="d-flex align-items-center justify-content-center bg-light"
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '5px',
                        }}
                      >
                        <i className={`bi ${getFileIcon(fileItem.file)} fs-4 text-muted`}></i>
                      </div>
                    )}
                  </Col>

                  {/* File Info */}
                  <Col>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <p className="mb-1 fw-medium text-truncate" style={{ maxWidth: '200px' }}>
                          {fileItem.file.name}
                        </p>
                        <small className="text-muted">
                          {fileService.formatFileSize(fileItem.file.size)}
                        </small>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        {getStatusBadge(fileItem.status)}
                        <Button
                          color="link"
                          size="sm"
                          className="text-danger p-0"
                          onClick={() => removeFile(fileItem.id)}
                          disabled={fileItem.status === 'uploading'}
                        >
                          <i className="bi bi-x-lg"></i>
                        </Button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {fileItem.status === 'uploading' && (
                      <Progress
                        value={uploadProgress[fileItem.id] || 0}
                        className="mt-2"
                        style={{ height: '5px' }}
                      />
                    )}

                    {/* Error Message */}
                    {fileItem.status === 'error' && fileItem.error && (
                      <small className="text-danger d-block mt-1">{fileItem.error}</small>
                    )}
                  </Col>

                  {/* Upload Button */}
                  {fileItem.status === 'pending' && (
                    <Col xs="auto">
                      <Button
                        color="primary"
                        size="sm"
                        onClick={() => uploadFile(fileItem)}
                      >
                        Upload
                      </Button>
                    </Col>
                  )}
                </Row>
              </div>
            ))}
          </CardBody>
        </Card>
      )}

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <Card className="mt-3 bg-success bg-opacity-10">
          <CardBody>
            <h6 className="text-success mb-3">Successfully Uploaded</h6>
            {uploadedFiles.map((file, index) => (
              <div key={index} className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-check-circle-fill text-success"></i>
                <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-truncate">
                  {file.fileName || file.url}
                </a>
              </div>
            ))}
          </CardBody>
        </Card>
      )}

      <style>{`
        .drop-zone:hover {
          border-color: #0d6efd !important;
          background-color: #f8f9fa;
        }
        .file-item:hover {
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
};

export default FileUploader;
