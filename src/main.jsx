import { createRoot } from 'react-dom/client'
import ReactModal from 'react-modal'
import { Toaster } from 'sonner'
import App from './App.jsx'
import {CustomProvider} from 'rsuite';

ReactModal.setAppElement('#root')
ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.3)'

createRoot(document.getElementById('root')).render(
  <>
    <CustomProvider theme="dark">
    <App />
    </CustomProvider>
  </>
)
