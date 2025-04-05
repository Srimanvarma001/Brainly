import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export function SignIn(){
    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white rounded  min-w-48 ">
            
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <div className="flex justify-center pt-4 pb">
                <Button text="Signin" variant="primary" fullWidth={true} loading={false}/>
            </div>
        </div>

    </div>
}