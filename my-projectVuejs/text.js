/* 


//============================Props Down, event up =======================================//


props down là data của thằng cha truyền xuống, thằng con chỉ được sài chứ không được sửa 



phân tích :
data là ở trong App 
listUser có chưucs năng là foreach  ra những user có trong listUser ở data App
mỗi user có một id dựa vào id đó user muốn xoá đi thì dựa vào listusser bởi vì listusser là cha của user
----> 3 cái component này có liên quan với nhau, vậy để truyền dữ liệu qua lại lẫn nhau ta dùng drops

Các bước để làm chức năng này :
Bước 1 : list User muốn lấy data từ App để foreach ra ở component listUser thì gồm 4 bước :
            + Trong component App ta phải import path của listUser vào 
            + khai báo component con đc add vào component cha
            + <list-user v-bind:listUser="listUser" /> khai báo trên tempate App bằng chỉ thị v-bind
            +listUser này mới qua bên component ListUser để khai báo props: array


Bước 2 :Tương tự ta cũng tiến hành xây dựng mối qua hệ giữa component user và listUser bằng props
        +trong component ListUser ta import path user vào 
        + components :{khai báo  thằng user vào thằng cha}
        +Cuôí cùng thì bên component user ta khai báo props : object

Bước 3 : Trong listUser ta có 2 nhiệm vụ : foreach dữ liệu được nhận được từ data App và truyền id vào cho user con
        +v-bind:user="user"---> Đây chính là phần user phải khai báo trong props rằng đây là object


//============================ event up =======================================//

event up thằng con muốn thay đổi data -> truyền thông điệp đến thằng cha muốn xoá -> nhiệm vụ của thằng cha là thay đổi data
Bây giờ xây dựng nút button delete ở thằng component con rồi viết sự kiện click vào nút đó thì data trong App sẽ xoá 
Bước 1 : xây dựng sự kiện v-on:click="tên hàm sự kiện" -> lấy tên đó viết hàm sự kiện ở method trong conponent user

Bước 2 :truyền cái sự kiện này ra cho thằng listUser, muốn truyền sự kiện từ user sang listuser thì làm theo bước sau:
                +Bước 1 :từ component listUser tạo 1 sự kiện(do tự mình tạo không phải js) v-on:deleteUser="deleteUser"
                + Bước 2 : cũng từ listUser khai báo trong methods cái sự kiện vừa tạo ra  deleteUser(data) truyền cái tham số data này ở user 
                + Bước 3 : từ component user ta khai báo var data rồi dùng this.$emit('deleteUser',data);
                deleteUser là tên sự kiện tự tạo ra của listUser data là phần khai báo ở user
Bước 3 : từ component user sự kiện ở đây là xoá cái phần tử mà nó click vào ---> phần tử đó phải có 1 cái id ---> vì thế ở user phải truyền trong data đó 1 cái id ra cho thằng listuser biết nó muốn xoá thằng có id 
Đây là hàm sự kiện tự mình tạo ra componennt ListUser {id: 7} vậy là thằng listuser đã nhận được id : 7 của thằng user muốn xoá 


Bước 4 : Mình phải tiếp tục truyền thêm 1 lần nữa từ thằng listUser ra ngoài App
        +ListUser mình lại tạo cho nó một cái sự kiện (Sự kiện này không phải là sự kiên js) truyền vào 1 cái data
        (ở method thì làm việc với giá trị của sự kiện đó handleDeleteUser)
        +Tiếp theo bên listUser ta cũng his.$emit('deleteUserEvent',data); deleteUserEvent : là tên sự kiện để truyền cái id qua cho App
        +Nhiệm vụ cửa thằng App là xoá cái id đó là xong(splice hàm xoá mảng):hàm splice(số thứ tự mảng, số lượng muốn xoa)Để có được số thứ tự của user thì cần phải foreach từng PT ra

*/