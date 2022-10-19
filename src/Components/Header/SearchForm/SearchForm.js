import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SearchForm.css";
import { BsSearch } from "react-icons/bs";
export default function SearchForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="form__container">
      <Formik
        initialValues={{ query: "" }}
        onSubmit={handleSubmit}
        className="form__container"
      >
        <Form className="form">
          <div className="form__input--container">
            <Field
              type="text"
              name="query"
              className="form__input"
              placeholder="Search film"
            />
            <button type="submit" className="form__btn">
              <BsSearch size="1.5rem" />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
//   <form className="form">
{
  /* <div className="form__container">
          <input
            type="text"
            className="form__input"
            placeholder="Search film"
          />
          <button type="submit" className="form__btn">
            <svg width="15" height="15" className="form__svg">
              <use href="./symbol-defs.svg#icon-search"></use>
            </svg>
          </button>
        </div>
      </form>
      <p className="header__error hidden">
        Search result not successful. Enter the correct movie name
      </p> */
}
