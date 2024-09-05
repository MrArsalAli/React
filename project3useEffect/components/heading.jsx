



function Heading({ id, title }) {
    return (
      <h1 className="w-3/4 p-2 text-2xl my-2 mx-auto rounded-sm font-medium bg-yellow-700 ">
        {id} . {title}
      </h1>
    );
  }
  
  export default Heading;