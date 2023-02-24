import {FC} from 'react';
import FormContainer from './components/FormContainer';
import DataProvider from './components/provider/DataProvider';

    type AppProps={}

const App: FC<AppProps> =() =>{
  return (
    <div className="bg-[url('https://i.ibb.co/kSZz4fr/mathieu-turle-u-Jm-hfu-CHm4-unsplash.jpg')] 
    bg-no-repeat bg-cover p-4">
      <DataProvider>
          <FormContainer />
      </DataProvider>
    </div>
  )
}

export default App;