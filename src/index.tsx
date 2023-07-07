import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import "@/app/styles/index.scss";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root');
if (!container) {
    throw new Error('Контейнер root не найден. Не удалось вмонтировать react приложение.')
}
const root = createRoot(container); 
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>);
