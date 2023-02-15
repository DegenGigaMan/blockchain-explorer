import { Link, useRouteError } from "react-router-dom";
import Header from "../components/Layout/Header/Header";

const ErrorPage = () => {
  const error = useRouteError();
  let title = 'An error occured!';
  let errorMessage = 'Something went wrong.';

  if(error.status === 500){

    errorMessage = error.data.message;
  }
  if(error.status === 404){
    title = 'Page not found';
    errorMessage = "Sorry, we couldn’t find the page you’re looking for.";
  }
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">{error.status}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
            
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {errorMessage}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to=".."
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
