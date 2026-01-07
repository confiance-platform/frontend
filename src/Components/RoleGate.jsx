// Role Gate Component - Show/Hide based on user role
import { useAuth } from "@/context/AuthContext";

export const RoleGate = ({
  children,
  roles,
  fallback = null
}) => {
  const { user, hasRole } = useAuth();

  if (!user || !roles || !Array.isArray(roles)) {
    return fallback;
  }

  // Check if user has any of the required roles
  const hasAccess = roles.some(role => hasRole(role));

  return hasAccess ? children : fallback;
};

export default RoleGate;

/*
USAGE EXAMPLES:

1. Single Role:
<RoleGate roles={['ROLE_ADMIN']}>
  <AdminPanel />
</RoleGate>

2. Multiple Roles:
<RoleGate roles={['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']}>
  <UserManagement />
</RoleGate>

3. With Fallback:
<RoleGate
  roles={['ROLE_SUPER_ADMIN']}
  fallback={<p>Super Admin access required</p>}
>
  <SuperAdminControls />
</RoleGate>

4. Inline Usage:
<RoleGate roles={['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']}>
  <Link to="/admin/users">User Management</Link>
</RoleGate>
*/
