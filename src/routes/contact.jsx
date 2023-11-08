import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "Наш любимый клиент",
    last: "89505856034",
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          
        </h1>
        {contact.notes && <p>{contact.notes}</p>}
        <div>
        </div>
      </div>
    </div>
  );
}
