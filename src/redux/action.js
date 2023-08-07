import axios from "axios"

const addAction =(data)=>{
    return{
        type:"ADD_DATA",
        payload:data
    }
}

const getAction = (data)=>{
   return{
    type:"GET_DATA",
    payload:data
   }
}


// post 

const handleForm = (e,formdata)=>async (dispatch) => {
    e.preventDefault();

    const addproduct = await axios.post(
      "https://real-tan-swallow-belt.cyclic.app/classifieds/add",
      formdata
    );
    console.log(addproduct.data.createProduct);
    dispatch(addAction(addproduct.data.createProduct))
    alert("Product added!");

   
  };

//   get 

const getData = (page,input,filter)=>async (dispatch) => {
    const data = await axios(
      "https://real-tan-swallow-belt.cyclic.app/classifieds",
      {
        params: {
          page: page,
          limit: 4,
          search: input,
          Category:filter
        },
      }
    );
   
    dispatch(getAction(data.data.products));
  };

//   delete 

const handleDelete = (id,product)=>async (dispatch) => {
    const deleted = await axios.delete(
      `https://real-tan-swallow-belt.cyclic.app/classifieds/${id}`
    );
  
    const updatedata = product.filter((el) => el._id !== id);

    dispatch(getAction(updatedata));
  };

export {addAction,getAction,handleForm,getData,handleDelete}