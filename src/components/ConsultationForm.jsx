import { toast, ToastContainer } from "react-toastify";

const ConsultationForm = () => {
    const handleSubmit=(e) =>{
        e.preventDefault();
        toast("Consultation Booked")
    }
  return (
    <div className="hero  mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gre">Book Now !</h1>
          <p className="py-6">
           Book your consultation as a result you can get free service to purify your home with beautiful indoor plants
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} action="">
                <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="name" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="email" />
             
              <button className="btn text-white bg-green-700 mt-4">Book Now</button>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ConsultationForm;
