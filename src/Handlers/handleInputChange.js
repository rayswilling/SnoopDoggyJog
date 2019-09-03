export default function handleInputChange(e) {
  //   This selects the target input (which is  <label className='FormField__Label' htmlFor='name'>
  //   Email Address
  // </label>)
  let target = e.target;
  // value is the value of what is inputted into that form
  let value = target.type === 'checkbox' ? target.checked : target.value;
  // name is the name attribute on the inputs
  let name = target.name;

  this.setState({
    [name]: value
  });
}
