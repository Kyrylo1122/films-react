import { Formik, Form, Field } from "formik";
import "./SearchForm.css";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addPage, addQuery } from "../../../Redux/GallerySlice";

export default function SearchForm() {
  const dispatch = useDispatch();

  return (
    <div className="form__container">
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(value, { resetForm }) => {
          dispatch(addQuery(value.query.toUpperCase()));
          dispatch(addPage(1));
          resetForm();
        }}
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
