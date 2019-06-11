const code =
`axios.get("/courses/" + this.state.courseID + "/" + typeURI + "/" + itemID)
.then((response) => {
  const editingData = {
    id: itemID,
    title: response.data.title,
    description: response.data.description,
    duration: response.data.duration
  }
  this.setState({ editingData, dialogMode: "edit", dialogType: type, openDialog: true })
})
.catch(error => console.log(error))`;

export default code;