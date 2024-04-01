import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup' 

const SignupSchema = yup.object().shape({
  name: yup.string()
    .min(2, 'Too Short!')
    // .max(9, 'Too Long!')
    .required('Required'),
  number: yup.number()
    .min(2, 'Too Short!')
    // .max(9, 'Too Long!')
    .required('Required'),
});


function ContactForm({value, handler, forButton}){
    const onChange=({target})=>{
        handler({...value, [target.name]:target.value});
        
      }


      
    return (

      
        <Formik
      initialValues={{
        name: "",
        number: ""
      }}
      
      
      
      // onReset={onChange}
      onSubmit={forButton}
      validationSchema={SignupSchema}
    //   validateOnChange={true}
    // validateOnBlur={true}
    >
      <Form onChange={onChange}>
        <div>
        <label htmlFor="name">name</label>
        <Field value={value.name} id="name" name="name" placeholder="Jane" />
        <ErrorMessage name="name" as="span" />
        </div>

        <div>
        <label htmlFor="number">number</label>
        <Field value={value.number} id="number" name="number" placeholder="Doe" type="number" />
        <ErrorMessage name="number" as="span" />
        </div>
    
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    )
}

export default ContactForm