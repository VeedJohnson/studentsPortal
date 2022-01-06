import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'


export default function LoadBiodata(props) {
    const history = useHistory();

    const handleRedirect = () => {
        history.push("/dashboard/biodata/view");
    }
    useEffect(() => {
        let stored = false;
        const user = JSON.parse(localStorage.getItem("media_user"));
        axios
        .get("http://localhost:5000/api/biodata/student/" + user.id)
        .then(({ data }) => {
            const bio = data.data[0];
            localStorage.setItem('biodata', JSON.stringify(bio));
            stored = true;
            if (stored) {
                const userBiodata = localStorage.getItem("biodata");
                if (userBiodata) {
                    console.log("double success");
                    handleRedirect();
                } else {
                    console.log("success light");
                }
            } else {
                console.log("success hard");
            }
            
        })
        .catch((error) => {
            console.log(`We have a server error`, error);
            alert("No data found for this user, please fill the biodata form");
        });
      }, []);


    return (
       <div>Loading student biodata</div>
    )
}