const Subscription = () => {
    return (
        <div className="mt-10 py-8 bg-slate-50">
            <h4 className="text-center">BECOME AN INSIDER!</h4>
            <p className="text-center mt-8"><small>First looks, exclusive offers, and special events are part of the package. Sign up now.</small></p>
            <div className="text-center my-10">
                <input className="border w-1/3 h-12 ps-5" type="text" name="" placeholder="Email address" />
                <input className="bg-blue-600 h-12 px-5 cursor-pointer text-white uppercase font-semibold" type="submit" name="" id="" value='Subscribe' />
            </div>
        </div>
    );
};

export default Subscription;