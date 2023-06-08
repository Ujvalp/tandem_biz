

const Company_Details = ({ formData, setFormData }) => {


    return (
        <div className='flex flex-col space-y-3'>
            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="text"
                required
                placeholder='Company Name ...'
                value={formData.cName}
                onChange={(e)=> setFormData({ ...formData, cName: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="email"
                required
                placeholder='Company Email ...'
                value={formData.cEmail}
                onChange={(e)=> setFormData({ ...formData, cEmail: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="tel"
                required
                placeholder='Company Phone ...'
                value={formData.cPhone}
                onChange={(e)=> setFormData({ ...formData, cPhone: e.target.value})}
            />

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="url"
                required
                placeholder='Company Website ...'
                value={formData.cWebsite}
                onChange={(e)=> setFormData({ ...formData, cWebsite: e.target.value})}
            />

            <select
                id="type-signup"
                name="cType"
                required
                onChange={(e)=> setFormData({ ...formData, cType: e.target.value})}
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-2.5 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
            >
                <option value={formData.cType}>
                 { formData.cType ? formData.cType :<>Choose Business type</>}
                </option>
                <option value="Private Limited Company">
                    Private Limited Company
                </option>
                <option value="Public Limited Company">
                    Public Limited Company
                </option>
                <option value="Partnership Company">
                    Partnerships Company
                </option>
                <option value="Limited Liability Partnership">
                    Limited Liability Partnership
                </option>
                <option value="One Person Company">
                    One Person Company
                </option>
                <option value="Sole Proprietorship">
                    Sole Proprietorship
                </option>
            </select>

            <select
                id="type-signup"
                name="biz_category"
                required
                onChange={(e)=> setFormData({ ...formData, cCategory: e.target.value})}
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-2.5 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
            >
                <option value={formData.cCategory}>
                { formData.cCategory ? formData.cCategory :<>Choose Business Category</>}
                </option>
                <option value="Retail Store">Retail Store</option>
                <option value="Wholesaler">Wholesaler</option>
                <option value="Consultant">Consultant</option>
                <option value="Education">Education</option>
                <option>
                    Service Provider
                </option>
                <option value="Financial Services Provider">
                    Financial Services Provider
                </option>
                <option value="Health services provider">
                    Health services provider
                </option>
                <option value="Restaurant / Bar / Wine Store">
                    Restaurant / Bar / Wine Store
                </option>
                <option value="Utilities">Utilities</option>
                <option value="Travel and transport">
                    Travel and transport
                </option>
                <option value="Goverment">Government</option>
                <option value="Online store / Marketplace">
                    Online store / Marketplace
                </option>
                <option value="Social Media">Social media</option>
                <option value="Charity">Charity / NGO</option>
                <option value="Others">Others</option>
            </select>

            <input
                className='shadow-[rgba(0,_0,_0,_0.24)_0px_1px_4px]  border border-1 border-gray-300 text-sm rounded-md px-4 w-60 tab:w-72 lap:w-80 m-auto h-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-blue-700'
                type="text"
                required
                placeholder='Business Registration Number ...'
                value={formData.cReg}
                onChange={(e)=> setFormData({ ...formData, cReg: e.target.value})}
            />

        </div>
    );
};
export default Company_Details;