export default function BackToTributeNavbar() {
  return (
    <div className="pt-8 pl-8">
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        <div className="ml-2">
          <div className="text-lg font-medium">Bill's Birthday Tribute</div>
          <div className="text-slate-500 text-sm">
            Created by{" "}
            <b className="text-slate-900 font-medium">Ted and 12 others</b> on{" "}
            <b className="text-slate-900 font-medium">Jan 1 2022</b>
          </div>
        </div>
      </div>
    </div>
  );
}
