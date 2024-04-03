import "./loading.css";
export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-[999999] flex h-[100vh] w-full items-center justify-center bg-[#fafafa5b]">
      <div className="loader"></div>
    </div>
  );
}
