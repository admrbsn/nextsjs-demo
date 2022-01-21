import Router from 'next/router'

export default function UserCaptureForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
    };

    const JSONdata = JSON.stringify(data);
    const response = await fetch("/api/user-capture-form", {
      body: JSONdata,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await response.json();
    //alert(`Sent: ${result.data}`);
    Router.push('/record2')
  };
  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div className="my-6">
        <label className="block mb-2 text-md font-semibold" htmlFor="name">
          Your Name
        </label>
        <input
          className="w-full p-4 border-0 shadow rounded"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="my-6">
        <label className="block mb-2 text-md font-semibold" htmlFor="email">
          Your Email
        </label>
        <input
          className="w-full p-4 border-0 shadow rounded"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full mt-2 p-4 bg-red text-white rounded text-lg font-semibold"
      >
        Continue
      </button>
    </form>
  );
}
