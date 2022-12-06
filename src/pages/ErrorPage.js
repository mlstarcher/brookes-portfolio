export default function ErrorPage() {
  //const error = useRouteError();
  //console.error(error);

  return (
    <div
      id="error-page"
      className="container flex flex-col items-center justify-center"
    >
      <h1>Oh dear!</h1>
      <p>An unexpected error has occurred.</p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
