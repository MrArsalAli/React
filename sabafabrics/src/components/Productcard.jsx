import { useNavigate } from "react-router";

function Productcard({ data }) {
  const navigate = useNavigate();
  const { thumbnail, price, title, id } = data;
  return (
    <>
      <div onClick={() => navigate(`/products/${id}`)}>
        <img
          className="bg-emerald-50 h-96 max-w-full cursor-pointer"
          src={thumbnail}
          alt=""
        />
        <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
          {title}
        </p>
        <p className="text-gray-400">PKR : {price}</p>
      </div>
    </>
  );
}

export default Productcard;
