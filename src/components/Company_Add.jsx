



const Company_Add = ({ formData, setFormData }) => {

    return (
        <div className='flex flex-col space-y-3'>
            <textarea
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px] border border-1 border-gray-300 text-sm rounded-md px-2.5 py-1.5 w-60 tab:w-72 lap:w-80 m-auto hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                cols="" rows="3"
                name="cAdd"
                required
                placeholder="Company Address ..."
                value={formData.cAdd}
                onChange={(e)=> setFormData({ ...formData, cAdd: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="text"
                required
                name="cZip"
                placeholder='Zip Code ...'
                value={formData.cZip}
                onChange={(e)=> setFormData({ ...formData, cZip: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="text"
                required
                name="cCity"
                placeholder='City ...'
                value={formData.cCity}
                onChange={(e)=> setFormData({ ...formData, cCity: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="text"
                required
                name="cState"
                placeholder='State ...'
                value={formData.cState}
                onChange={(e)=> setFormData({ ...formData, cState: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="text"
                required
                name="cCountry"
                placeholder='Country ...'
                value={formData.cCountry}
                onChange={(e)=> setFormData({ ...formData, cCountry: e.target.value})}
            />
        </div>
    );
};
export default Company_Add;