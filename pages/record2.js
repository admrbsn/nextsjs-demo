// pages/record2.js

import MainNavbar from "../components/MainNavbar";
import BackToTributeNavbar from "../components/BackToTributeNavbar";
import Link from "next/link";

export default function RecordStep2() {
  return (
    <>
      <MainNavbar />
      <BackToTributeNavbar />
      <main className="w-full h-full flex items-center justify-center py-16">
        <div className="container w-1/3 mx-auto">
          <h1 className="mb-12 text-4xl font-medium text-center">
            How would you like to record?
          </h1>
          <Link href="/record3">
            <div className="mb-5 p-12 bg-white rounded-xl shadow text-center">
              <svg
                className="w-10 h-10 fill-red mx-auto mb-3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.613 18.581m9.387-9.581c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4zm-2 0c0-1.103-.896-2-2-2s-2 .897-2 2 .896 2 2 2 2-.897 2-2zm-9 0c0 3.86 3.141 7 7 7s7-3.14 7-7-3.141-7-7-7-7 3.14-7 7zm16 0c0 4.97-4.029 9-9 9s-9-4.03-9-9 4.029-9 9-9 9 4.03 9 9zm-.404 12.501c1.007 1.142-.014 2.679-1.448 2.481-1.795-.245-3.236-1.702-7.147-1.702-3.91 0-5.352 1.458-7.146 1.702-1.436.198-2.456-1.34-1.449-2.481l2.898-3.289c.559.388 1.156.725 1.79.994l-2.025 2.298c1.295-.524 3.065-1.225 5.933-1.225s4.638.7 5.933 1.224l-2.025-2.298c.634-.27 1.231-.606 1.79-.994l2.896 3.29z" />
              </svg>
              <div className="text-lg font-medium">Webcam</div>
            </div>
          </Link>
          <div className="w-full flex items-center justify-center">
            <svg
              className="w-6 h-6 fill-slate-600 mr-3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
            </svg>
            <span className="font-medium">or upload a video</span>
          </div>
        </div>
      </main>
    </>
  );
}
