use form
1.use form tag and onSubmit handler with event(e)
From e access e.target.[name of the input field].value

2.controlled element: use indiviudual field state for each input field 

3.controled element with one object holding all the input field value.

4. uncontrolled element: useRef to create a reference to the element and access value by using like: nameRef.current.value

5.use hook handle state and submit and error. example react hook form

6.Resuable component.

use context api:
1.create a context and export it
2.Add provider for the context with a value
3.useContext to access value in the context API
