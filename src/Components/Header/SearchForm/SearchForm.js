import { Formik, Form, Field } from "formik";
import "./SearchForm.css";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addQuery } from "../../../Redux/GallerySlice";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  query: Yup.string().required("Required"),
});

export default function SearchForm() {
  const dispatch = useDispatch();

  return (
    <div className="form__container">
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(value, { resetForm }) => {
          dispatch(addQuery(value.query.toUpperCase()));
          resetForm();
        }}
        validationSchema={SignupSchema}
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
