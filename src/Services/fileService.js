// File Upload Service (Cloudinary)
import apiClient from './apiClient';
import { API_ENDPOINTS } from '../config/constants';

// Supported file types
const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
const SUPPORTED_DOCUMENT_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/plain',
  'text/csv',
];
const SUPPORTED_VIDEO_TYPES = ['video/mp4', 'video/avi', 'video/mov', 'video/wmv', 'video/x-matroska'];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

class FileService {
  /**
   * Upload image file
   * @param {File} file - Image file
   * @param {object} options - Upload options
   * @returns {Promise} Upload response with URL
   */
  async uploadImage(file, options = {}) {
    this.validateFile(file, SUPPORTED_IMAGE_TYPES, MAX_FILE_SIZE);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', options.userId);
    formData.append('entityType', options.entityType || 'profile');
    if (options.entityId) formData.append('entityId', options.entityId);
    formData.append('folder', options.folder || 'images');

    try {
      const response = await apiClient.post(API_ENDPOINTS.FILES.UPLOAD_IMAGE, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Upload document file (PDF, DOC, etc.)
   * @param {File} file - Document file
   * @param {object} options - Upload options
   * @returns {Promise} Upload response with URL
   */
  async uploadDocument(file, options = {}) {
    this.validateFile(file, SUPPORTED_DOCUMENT_TYPES, MAX_FILE_SIZE);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', options.userId);
    formData.append('entityType', options.entityType || 'document');
    if (options.entityId) formData.append('entityId', options.entityId);
    formData.append('folder', options.folder || 'documents');

    try {
      const response = await apiClient.post(API_ENDPOINTS.FILES.UPLOAD_DOCUMENT, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Upload video file
   * @param {File} file - Video file
   * @param {object} options - Upload options
   * @returns {Promise} Upload response with URL
   */
  async uploadVideo(file, options = {}) {
    this.validateFile(file, SUPPORTED_VIDEO_TYPES, MAX_FILE_SIZE);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', options.userId);
    formData.append('entityType', options.entityType || 'video');
    if (options.entityId) formData.append('entityId', options.entityId);
    formData.append('folder', options.folder || 'videos');

    try {
      const response = await apiClient.post(API_ENDPOINTS.FILES.UPLOAD_VIDEO, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Upload any file (auto-detect type)
   * @param {File} file - File to upload
   * @param {object} options - Upload options
   * @returns {Promise} Upload response with URL
   */
  async upload(file, options = {}) {
    const allTypes = [...SUPPORTED_IMAGE_TYPES, ...SUPPORTED_DOCUMENT_TYPES, ...SUPPORTED_VIDEO_TYPES];
    this.validateFile(file, allTypes, MAX_FILE_SIZE);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', options.userId);
    formData.append('entityType', options.entityType || 'general');
    if (options.entityId) formData.append('entityId', options.entityId);
    formData.append('folder', options.folder || 'uploads');

    try {
      const response = await apiClient.post(API_ENDPOINTS.FILES.UPLOAD, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get files by entity
   * @param {string} entityType - Entity type (profile, kyc, etc.)
   * @param {string} entityId - Entity ID
   * @returns {Promise} Files list
   */
  async getFilesByEntity(entityType, entityId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.FILES.GET_BY_ENTITY(entityType, entityId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get files by user
   * @param {number} userId - User ID
   * @returns {Promise} Files list
   */
  async getFilesByUser(userId) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.FILES.GET_BY_USER(userId));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete file
   * @param {string} publicId - Cloudinary public ID
   * @returns {Promise} Delete response
   */
  async deleteFile(publicId) {
    try {
      const response = await apiClient.delete(API_ENDPOINTS.FILES.DELETE(encodeURIComponent(publicId)));
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Validate file before upload
   * @param {File} file - File to validate
   * @param {Array} allowedTypes - Allowed MIME types
   * @param {number} maxSize - Maximum file size in bytes
   */
  validateFile(file, allowedTypes, maxSize) {
    if (!file) {
      throw new Error('No file provided');
    }

    if (!allowedTypes.includes(file.type)) {
      throw new Error(`File type "${file.type}" is not supported. Allowed types: ${this.getReadableTypes(allowedTypes)}`);
    }

    if (file.size > maxSize) {
      throw new Error(`File size (${this.formatFileSize(file.size)}) exceeds maximum allowed size (${this.formatFileSize(maxSize)})`);
    }
  }

  /**
   * Get readable file type names
   * @param {Array} mimeTypes - MIME types array
   * @returns {string} Readable string
   */
  getReadableTypes(mimeTypes) {
    const typeMap = {
      'image/jpeg': 'JPEG',
      'image/jpg': 'JPG',
      'image/png': 'PNG',
      'image/gif': 'GIF',
      'image/webp': 'WebP',
      'image/svg+xml': 'SVG',
      'application/pdf': 'PDF',
      'application/msword': 'DOC',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
      'application/vnd.ms-excel': 'XLS',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
      'video/mp4': 'MP4',
      'video/avi': 'AVI',
      'video/mov': 'MOV',
    };

    return mimeTypes.map(type => typeMap[type] || type.split('/')[1]).join(', ');
  }

  /**
   * Format file size to readable string
   * @param {number} bytes - File size in bytes
   * @returns {string} Formatted size
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Create object URL for preview
   * @param {File} file - File
   * @returns {string} Object URL
   */
  createPreviewUrl(file) {
    return URL.createObjectURL(file);
  }

  /**
   * Revoke object URL
   * @param {string} url - Object URL
   */
  revokePreviewUrl(url) {
    URL.revokeObjectURL(url);
  }

  /**
   * Check if file is an image
   * @param {File} file - File
   * @returns {boolean}
   */
  isImage(file) {
    return SUPPORTED_IMAGE_TYPES.includes(file.type);
  }

  /**
   * Check if file is a document
   * @param {File} file - File
   * @returns {boolean}
   */
  isDocument(file) {
    return SUPPORTED_DOCUMENT_TYPES.includes(file.type);
  }

  /**
   * Check if file is a video
   * @param {File} file - File
   * @returns {boolean}
   */
  isVideo(file) {
    return SUPPORTED_VIDEO_TYPES.includes(file.type);
  }
}

export const fileService = new FileService();
export default fileService;
