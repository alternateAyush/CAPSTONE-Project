import React from "react";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateIssue,deleteIssue } from "../../redux/actions/issues";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { notify } from "..";
import { MdDeleteOutline} from "react-icons/md";
function formatDate(x) {
  const date = new Date(x);
  // Get the year, month, and day components from the date
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const day = String(date.getDate()).padStart(2, "0");

  // Concatenate the components to form the formatted date
  console.log(`${year}${month}${day}`);
  return `${year}${month}${day}`;
}

const Issue = ({ issuee }) => {
  const dispatch = useDispatch();
  const [issue, setIssue] = useState(issuee);
  const handleUrgentToggle = (e) => {
    e.preventDefault();
    const func = async () => {
      const tempIssue = { ...issue, urgent: !issue.urgent };
      try {
        await dispatch(updateIssue({ id: issue._id, issue: tempIssue }));
        notify.success("Issue marked urgent!.");
      } catch (err) {
        console.log(err);
      }
      setIssue(tempIssue);
      return;
    };
    func();
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    if(issue.closed===false){
      notify.error('Issue must be closed.');
    }
    else{
      await dispatch(deleteIssue(issue._id));
      console.log('deleted');
      notify.success('Issue closed and deleted.')
    }
    return;
  };
  console.log(issue);
  console.log(issue.createdAt);
  return (
    <div className="w-full bg-white flex-col justify-start items-start space-y-2 p-2 my-1 border border-transparent rounded-md shadow-md">
      <div className="p-x-2 flex justify-between">
        <button onClick={handleUrgentToggle}>
          {issue.urgent == true ? <FaBookmark size={15} /> : <FaRegBookmark size={15}/>}
        </button>
        <button onClick={handleDelete}>
          <MdDeleteOutline size={25}/>
        </button>
      </div>
      <div className="w-full flex justify-between items-baseline">
        <span>
          <span className="text-xl font-bold">#Issue</span>
          <span className="text-sm text-gray-600">{issue._id}</span>
        </span>
        <span className="space-x-1">
          <span>raised by</span>
          <span>{issue.issuer}</span>
          <span>{moment(issue.createdAt).fromNow()}</span>
        </span>
      </div>
      <div className="flex items-baseline flex-wrap space-x-2 space-y-2">
        {issue.tags.map((empId) => {
          return (
            <span className="text-white bg-black rounded-md p-1" key={empId}>
              {empId}
            </span>
          );
        })}
      </div>
      <div className="w-full p-2 rounded-md bg-gray-200 text-gray-700">
        <span>{issue.description}</span>
      </div>
    </div>
  );
};

export default Issue;
