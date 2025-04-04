export const CompletionScreen = (props: { className: string, urlForRedirect: string }) => {
  console.log(props.urlForRedirect)
  return (
    <div className={props.className}>
      <h1 className="font-bold mt-2 lg:mx-10 text-center">
        All done!
      </h1>
      <div className="flex justify-center mt-10">
      <p>Click <a href={props.urlForRedirect} target="_blank">here</a> to view the folder in google drive</p>
      </div>
    </div>
  );
};
