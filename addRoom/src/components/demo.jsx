import React, { Component } from "react";
import { Input, Button ,Form, TextArea} from "semantic-ui-react";
import Select from "react-select";
import PicturesWall from './picture-wall';

const options = [
  { value: "agree", label: "Yes" },
  { value: "disagree", label: "No" }
];


const genders = [
  
  { value: "male", label: "Male" },
  { value: "female", label: "Female"},
  { value: "both", label:"Both OK"}
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 style={{ marginTop: "70px", textAlign: "center" }}>
          The Information about your room
        </h1>
        <br />
        <h2 style={{ margintTop: "75px", marginLeft: "350px" }}>
          {" "}
          Your Room Address
        </h2>
        <br />
        <Input
          id="address"
          placeholder="Address"
          style={{
            marginLeft: "400px",
            width: "400px"
          }}
        />
        <Input
          id="addressLine2"
          placeholder="AddressLine2"
          style={{
            marginLeft: "100px",
            width: "400px"
          }}
        />
        <Input
          id="apartmentNumber"
          placeholder="Apt number(if necessary)"
          style={{
            marginLeft: "100px",
            width: "400px"
          }}
        />
        <br />
        <Input
          id="city"
          placeholder="City"
          style={{
            marginTop: "20px",
            marginLeft: "400px",
            width: "400px"
          }}
        />
        <Input
          id="state"
          placeholder="State"
          style={{
            marginLeft: "100px",
            width: "400px"
          }}
        />
        <Input
          id="zip code"
          placeholder="Zip Code"
          style={{
            marginLeft: "100px",
            width: "400px"
          }}
        />
        <br />

        <h2 style={{ marginTop: "40px", marginLeft: "350px" }}>
          The demand to resisdent of your room
        </h2>
        <h3 style={{ marginTop: "30px", marginLeft: "400px" }}>
          The gender of roomate you are looking for
          <Select className="mt-4 col-md-8 col-offset-4" options={genders} />
        </h3>


        <h3 style={{ marginTop: "30px", marginLeft: "400px" }}>
          Does your room allow pets?
          <Select className="mt-4 col-md-8 col-offset-4" options={options} />
        </h3>

        <h3 style={{ marginTop: "30px", marginLeft: "400px" }}>
          Does your room allow smoking?
          <Select className="mt-4 col-md-8 col-offset-4" options={options} />
        </h3>

        <h3 style={{ marginTop: "30px", marginLeft: "400px" }}>
          Does your room allow party in your property?
          <Select className="mt-4 col-md-8 col-offset-4" options={options} />
        </h3>

        <h3 style={{ marginTop: "30px", marginLeft: "400px" }}>
          Does your room allow cooking in your property?
          <Select className="mt-4 col-md-8 col-offset-4" options={options} />
        </h3>

        <h3 style={{ marginTop: "30px", marginLeft: "400px" }}>
          Does your room include basic furniture(Bed, Desk, Chair and so on)?
          <Select className="mt-4 col-md-8 col-offset-4" options={options} />
        </h3>

        <h3 style={{ marginTop: "30px", marginLeft: "400px" }}>
          Does your room have attached bathroom?
          <Select className="mt-4 col-md-8 col-offset-4" options={options} />
        </h3>

        <h3 style={{ marginTop: "30px", marginLeft: "400px" }}>
          Does the resisdent need to buy rental insurance?
          <Select className="mt-4 col-md-8 col-offset-4" options={options} />
        </h3><br/>

        <h2 style={{ marginTop: "40px", marginLeft: "350px" }}>
          Details and pricing
        </h2>
        <h3 style={{ marginTop: "30px", marginLeft: "400px" }}>
            Monthly payment
        
        <Input
          id="price"
          placeholder="price"
          style={{
            marginLeft: "100px",
            width: "400px"
          }}
        /> 
        </h3>
        <h3 style={{ marginTop:"30px",marginLeft: "400px" }}>
            Security depostit    
        
        
        <Input
          id="deposit"
          placeholder="deposit"
          style={{
            marginLeft: "100px",
            width: "400px"
          }}
        /> 
        </h3>
        <h3 style={{ marginTop:"30px",marginLeft: "400px" }}>
            How many resisdents in the whole property?  
        <Input
          id="resisdentCount"
          placeholder="number"
          style={{
            marginLeft: "100px",
            width: "400px"
          }}
        /> 
        </h3>
        <h3 style={{ marginTop:"30px",marginLeft: "400px" }}>
            The utility fee that resisdent need to pay or share  
        <Input
          id="utility"
          placeholder="such as electric, water and gas fee"
          style={{
            marginLeft: "100px",
            width: "800px"
          }}
        /> 
        </h3>
        <h3 style={{ marginTop:"30px",marginLeft: "400px" }}>
            Other thing you want to describe
        </h3>
        <Form style={{ marginLeft:"400px" ,width: "1430px"}} >
        <TextArea placeholder='Tell resisdent more' style={{ minHeight: "200px" }} />
        </Form>
        <h2 style={{ marginTop: "40px", marginLeft: "350px" }}>
          The picture of your room
        </h2>
        <PicturesWall />
        <div style={{margin:'10px',textAlign:'center' }}>
        <Button primary content='Submit' style={{marginBottom:'10px'}}/>
        <Button content='Reset' style={{marginLeft:'20px'}}/>
        </div>
      </div>

    );
  }
}

export default Demo;
