import React, { useState, useEffect, useRef } from "react";
import studentData from "../../../../public/students_data.json"
import { useParams,useNavigate } from "react-router-dom";
import { PageTitle,RegularText,ComponentSubTitle } from "../../../globalComponents/Typography";

const NotebookContent = () => {
    const navigate = useNavigate()
    const {id}=useParams()
    const noteId = parseInt(id, 10)
    const mockNote = studentData[0].student_notebook
    const note = mockNote.find(note => note.note_id === noteId);

    const toggleReturn = ()=>{
        navigate("/notebook")
    }
    
    return (
        <div className="page">
            <PageTitle>Notebook</PageTitle>
            {/* Return */}
            <div onClick={()=>toggleReturn()} className="flex items-center mt-4 cursor-pointer">
                &lt;
                {note.areas.map((item, index) => (
                    <RegularText>{item}</RegularText>
                ))}
                <p className="ROBOTO_FONTS mx-1" style={{ fontWeight: 500, fontSize: 16 }}>|</p>
                <ComponentSubTitle>{note.title}</ComponentSubTitle>
            </div>

            {/* Note content */}
            <div className="w-[95%] bg-white rounded-lg p-5 mt-8">
                <h2 className="ROBOTO_FONTS" style={{ fontWeight: 500, fontSize: 18 }}>{note.content}</h2>
                <RegularText className="mt-4">
                    Lorem ipsum dolor sit amet consectetur. Facilisis quisque eros nulla elementum eu velit orci. Malesuada tristique massa sed elementum sociis dolor. Velit turpis proin nisl donec eu at eget bibendum. Vitae morbi a et risus amet phasellus. In cursus non adipiscing non. Tristique cras lacinia sit dolor amet sem. Ipsum tincidunt tellus enim sit pretium tempor lacinia. Commodo sed ut cursus at vitae orci vitae tincidunt. Accumsan tristique eget ut neque elementum nulla.
                </RegularText>

                <RegularText className="mt-4">
                    Lorem ipsum dolor sit amet consectetur. Facilisis quisque eros nulla elementum eu velit orci. Malesuada tristique massa sed elementum sociis dolor. Velit turpis proin nisl donec eu at eget bibendum. Vitae morbi a et risus amet phasellus. In cursus non adipiscing non. Tristique cras lacinia sit dolor amet sem. Ipsum tincidunt tellus enim sit pretium tempor lacinia. Commodo sed ut cursus at vitae orci vitae tincidunt. Accumsan tristique eget ut neque elementum nulla.
                </RegularText>

                <div className="w-full h-[145px] bg-gray-300 mt-5"></div>

                <div className="flex justify-end mt-20 ">
                    <button className="relative w-[144px] h-[50px] rounded-lg bg-black text-white hover:bg-black-100 cursor-pointer">Save</button>
                </div>
            </div>
        </div>
    );
}

export default NotebookContent;