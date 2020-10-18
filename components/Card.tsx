interface CardProps {
  title: string;
  text?: string;
  href: string;
  imgSrc: string
}

export default function Card({ title, text, href, imgSrc }: CardProps) {
  return (
    <>
      <div className={"card text-center"}>
        <img className={"card-img-top"} src={imgSrc} />
        <div className={"card-body d-flex flex-column"}>
          <div className={"mt-auto"}>
            <h5 className={"card-title"}>{title}</h5>
            <hr />
            <p className={"card-text"}>{text}</p>
          </div>
        </div>
        <div className={"card-footer"}>
          <a href={href} className={"btn btn_mainColor"}>
            Go to site
          </a>
        </div>
      </div>
    </>
  );
}
