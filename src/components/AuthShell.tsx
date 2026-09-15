export default function AuthShell({ children }) {
  return (
    <div className="min-h-screen bg-mist">
      <main className="min-h-screen grid place-items-center p-[30px]">{children}</main>
    </div>
  );
}
