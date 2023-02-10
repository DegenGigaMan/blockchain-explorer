import Header from "../components/Layout/Header/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>An error occured!</h1>
        <p>Could not find this page</p>
      </main>
    </>
  );
};

export default ErrorPage;