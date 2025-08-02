import React, {useState, useEffect} from "react";

function ListOfContacts() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("contacts");
        if(stored){
            setItems(JSON.parse(stored));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "fullName") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "search") {
            setSearch(value);
        }
    }

    const addContact = (e) => {
        if (!name.trim() || !email.trim()) {
            alert("Name and Email are required!");
            return;
        } 
        // setItems((prevItems) => [
        // ...prevItems,
        // { id: prevItems.length, name: name, email: email },
        // ]);

        if(editId != null){
            setItems((prevItems) => {
                const updated = prevItems.map((item) => item.id === editId ? {...item, name, email} : item);
                localStorage.setItem("contacts", JSON.stringify(updated));
                return updated;
            })
            setEditId(null);
        }else{
        setItems((prevItems) => {
            const newItems = [...prevItems, { id: Date.now(), name, email }];
            console.log("addcontact", newItems);
            // localStorage.setItem() requires two arguments: a key and a string value.
            localStorage.setItem("contacts", JSON.stringify(newItems));
            return newItems;
        });
        }

        // console.log("search", search);
        setName("");
        setEmail("");
    }

    const filteredItems = items.filter(
        (item) => 
            item.name.toLowerCase().includes(search.toLowerCase()) || 
            item.email.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete?");
        if (!confirm) return;
        setItems((prevItems) => {
        const updatedItems = prevItems.filter((item) => item.id !== id);
        localStorage.setItem("contacts", JSON.stringify(updatedItems));
        return updatedItems;
        });
    }

    const handleEdit = (id) => {
        //         const filteredItems = items.filter((i) => i.id === id);
        // // filter() returns an array of all matches, even if just one.
        // if (filteredItems.length > 0) {
        //   setName(filteredItems[0].name);
        //   setEmail(filteredItems[0].email);
        //   setEditId(id);
        // }
        const item = items.find((i) => i.id === id);
        if (item) {
        setName(item.name);
        setEmail(item.email);
        setEditId(id); // Set which item we're editing
        }
    }

    const downloadCSV = () => {
        if (items.length === 0) {
            alert("No contacts to download!");
            return;
        }

        const csvHeader = "Name,Email\n";
        const csvRows = items.map((c) => `${c.name},${c.email}`).join("\n");
        const csvData = csvHeader + csvRows;

        const blob = new Blob([csvData], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "contacts.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };


    return(
        <div>
            {/* To accept phone numbers, use type='tel'. For email, use type='email' */}
            <input type="text" name="fullName" placeholder="Enter Name" value={name} required onChange={handleChange} /><br/>
            <input type="email" name="email" placeholder="Enter Email" value={email} onChange={handleChange} required /><br/>
            <button onClick={addContact}>{editId != null ? "Update Contact" : "Add Contact"}</button>{editId != null ? <button onClick={() => { setEditId(null); setEmail(""); setName("");}} style={{ marginLeft: "10px" }}>Cancel</button> : ""}<br/>

            <input type="search" placeholder="Search.." name="search" value={search} onChange={handleChange}  />
            <button onClick={downloadCSV}>Download CSV</button>

            <div>
                <ul>
                {filteredItems && Array.isArray(filteredItems) && filteredItems.map((item, index) => (
                    <li key={index}>{item.name} - {item.email} {" "}  <button onClick={() => {handleEdit(item.id)}}>Edit</button><button onClick={() => {handleDelete(item.id)}}>Delete</button></li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default ListOfContacts;