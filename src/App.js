import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoLayout from './Layouts/InfoLayout';
import StageLayout from './Layouts/StageLayout';
import AccountLayout from './Layouts/AccountLayout';
import DefaultLayout from './Layouts/DefaultLayout';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route
                        path="/crops"
                        element={
                            <DefaultLayout type="Tên cây trồng" crops>
                                Quy trình phát triển cây trồng
                            </DefaultLayout>
                        }
                    ></Route>

                    <Route
                        path="/animals"
                        element={
                            <DefaultLayout type="Tên vật nuôi" animal>
                                Quy trình phát triển con vật
                            </DefaultLayout>
                        }
                    ></Route>

                    <Route
                        path="/infocropslayout"
                        element={
                            <InfoLayout
                                info="Nhập thông tin cây trồng"
                                name="Tên cây trồng"
                                stage="Nhập các giai đoạn phát triển cây trồng"
                                crops
                            >
                                Thêm mới quy trình phát triển cây trồng
                            </InfoLayout>
                        }
                    ></Route>

                    <Route
                        path="/infoanimalslayout"
                        element={
                            <InfoLayout
                                info="Nhập thông tin con vật"
                                name="Tên con vật"
                                stage="Nhập các giai đoạn phát triển con vật"
                                animals
                            >
                                Thêm mới quy trình phát triển con vật
                            </InfoLayout>
                        }
                    ></Route>

                    <Route
                        path="/stagecropslayout"
                        element={
                            <StageLayout info="Nhập thông tin giai đoạn cây trồng" name="Tên giai đoạn" content crops>
                                Thêm mới quy trình phát triển cây trồng
                            </StageLayout>
                        }
                    ></Route>

                    <Route
                        path="/stageanimalslayout"
                        element={
                            <StageLayout info="Nhập thông tin giai đoạn con vật" name="Tên giai đoạn" content animals>
                                Thêm mới quy trình phát triển con vật
                            </StageLayout>
                        }
                    ></Route>

                    <Route path="/accountlayout" element={<AccountLayout>Cài đặt</AccountLayout>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
