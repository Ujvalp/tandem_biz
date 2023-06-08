

const ContactDetail = ({ formData, setFormData }) => {


    return (
        <div className='flex flex-col space-y-3'>
            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="text"
                required
                name="pName"
                placeholder='Name ...'
                value={formData.pName}
                onChange={(e)=> setFormData({ ...formData, pName: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="tel"
                required
                name="pPhone"
                placeholder='Phone Number ...'
                value={formData.pPhone}
                onChange={(e)=> setFormData({ ...formData, pPhone: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="text"
                required
                name="pEmail"
                placeholder='Email ...'
                value={formData.pEmail}
                onChange={(e)=> setFormData({ ...formData, pEmail: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="text"
                required
                name="jobTitle"
                placeholder='Job Title ...'
                value={formData.jobTitle}
                onChange={(e)=> setFormData({ ...formData, jobTitle: e.target.value})}
            />
        </div>
    );
};
export default ContactDetail;