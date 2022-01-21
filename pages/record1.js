// pages/record1.js

import MainNavbar from "../components/MainNavbar";
import BackToTributeNavbar from "../components/BackToTributeNavbar";
import UserCaptureForm from "../components/Record/UserCaptureForm";

export default function RecordStep1() {
  return (
    <>
      <MainNavbar />
      <BackToTributeNavbar />
      <main className="w-full h-full flex items-center justify-center py-16">
        <div className="container w-1/3 mx-auto">
          <h1 className="mb-5 text-4xl font-medium text-center">
            👋 Hi, Let’s Record for Bill!
          </h1>
          <h2 className="mb-12 text-slate-500 text-xl font-normal text-center">
            Thank you for taking the time to participant in Bill's Tribute!
            Let’s get started.
          </h2>
          <UserCaptureForm />
        </div>
      </main>
    </>
  );
}
