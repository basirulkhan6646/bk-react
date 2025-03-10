export default function Card({ myName, description, image }) {
  console.log('Props', myName);
  return (
    <figure className=" md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800  mb-5">
      <img
        className="w-24 h-24 md:w-48 md:h-48 md:rounded-none rounded-full mx-auto"
        src={image}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">{description}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{myName}</div>
          <div className="text-slate-700 dark:text-slate-500"></div>
        </figcaption>
      </div>
    </figure>
  );
}
