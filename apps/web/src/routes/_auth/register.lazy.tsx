import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth/register')({
  component: Register,
});

function Register() {
  return (
    <div className="p-2">
      <h3>Register Page!</h3>
    </div>
  );
}
