export default function Footer(props: any) {
  const version = "v1.0.0";

  return (
    <footer id="footer" className={props.className}>
      <div>
        <a
          href="https://absolutetabletop.com/products/the-mecha-hack"
          target="blank"
          className="hover:text-stone-50"
        >
          The Mecha Hack © 2018 Absolute Tabletop, LLC.
        </a>{" "}
        <a
          href="https://damianskotzke.com"
          target="blank"
          className="hover:text-stone-50"
        >
          Generator by Table Voyager.
        </a>{" "}
        <span className="hover:text-green-400">{version}</span>
      </div>
    </footer>
  );
}
