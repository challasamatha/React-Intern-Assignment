import { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const validate = () => {
    let e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (form.password.length < 6) e.password = "Min 6 chars";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = e => {
    e.preventDefault();
    if (validate()) alert("Form Submitted");
  };

  return (
    <form onSubmit={submit} className="border p-4 rounded space-y-2">
      <h2 className="text-xl font-semibold">User Form</h2>

      <input placeholder="Name" className="border p-2 w-full"
        onChange={e => setForm({ ...form, name: e.target.value })} />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input placeholder="Email" className="border p-2 w-full"
        onChange={e => setForm({ ...form, email: e.target.value })} />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <div className="flex gap-2">
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          className="border p-2 flex-1"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button type="button" onClick={() => setShow(!show)}>👁</button>
      </div>
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <button className="bg-green-500 text-white px-4 py-1">Submit</button>
    </form>
  );
}