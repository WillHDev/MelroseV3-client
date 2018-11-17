import UpdateItem from "../components/UpdateItem";

const Update = props => (
  <div>
    <UpdateItem id={props.query.id} />
  </div>
);
export default Update;
//export withRouter(Update)
//good for persisting layout between pages
//such as keeping cart open while navigating to a different page
//cmd shift l

//No 'this.' bc stateless fn'l   can also destructure in props
