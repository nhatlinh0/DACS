import InfoLayout from './Layouts/InfoLayout';
import StageLayout from './Layouts/StageLayout';
import AccountLayout from './Layouts/AccountLayout';
import DefaultLayout from './Layouts/DefaultLayout';
function App() {
    return (
        <div className="App">
            <InfoLayout
                info="Nhập thông tin cây trồng"
                name="Tên cây trồng"
                stage="Nhập các giai đoạn phát triển cây trồng"
            >
                Thêm mới quy trình phát triển cây trồng
            </InfoLayout>
            <StageLayout info="Nhập thông tin giai đoạn cây trồng" name="Tên giai đoạn" content>
                Thêm mới quy trình phát triển cây trồng
            </StageLayout>
            <AccountLayout>Cài đặt</AccountLayout>
            <DefaultLayout type="Tên cây trồng">Quy trình phát triển cây trồng</DefaultLayout>
        </div>
    );
}

export default App;
