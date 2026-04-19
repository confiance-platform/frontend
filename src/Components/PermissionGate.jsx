// Permission Gate Component - Show/Hide based on permissions
import { useAuth } from "@/context/AuthContext";

export const PermissionGate = ({
  children,
  permission,
  permissions,
  requireAll = false,
  fallback = null
}) => {
  const { hasPermission, hasAllPermissions, hasAnyPermission } = useAuth();

  let hasAccess = false;

  if (permission) {
    hasAccess = hasPermission(permission);
  } else if (permissions) {
    hasAccess = requireAll
      ? hasAllPermissions(permissions)
      : hasAnyPermission(permissions);
  }

  return hasAccess ? children : fallback;
};

export default PermissionGate;

/*
USAGE EXAMPLES:

1. Single Permission:
<PermissionGate permission="USER_DELETE">
  <button onClick={handleDelete}>Delete User</button>
</PermissionGate>

2. Multiple Permissions (Any):
<PermissionGate permissions={["USER_WRITE", "USER_DELETE"]}>
  <AdminControls />
</PermissionGate>

3. Multiple Permissions (All Required):
<PermissionGate permissions={["USER_WRITE", "USER_DELETE"]} requireAll={true}>
  <FullAccessPanel />
</PermissionGate>

4. With Fallback:
<PermissionGate
  permission="USER_WRITE"
  fallback={<p>You don't have permission to edit</p>}
>
  <EditButton />
</PermissionGate>
*/
