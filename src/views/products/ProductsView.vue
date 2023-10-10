<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4>
                    Add Product
                    <RouterLink to="" class="btn btn-outline-success float-end"> Add Product</RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3" v-for="card in products" :key="card.id">
                            <div class="card">
                                <img :src="card.thumb" alt="Card image" style="width:100%">
                                <div class="card-body">
                                    <h5 class="card-title">{{ card.content }}</h5>
                                    <p class="card-text">{{ card.description }}</p>
                                    <div class="d-flex justify-content-center">
                                        <button class="btn btn-primary" @click="editCard(card.id)">Edit</button>
                                        <button class="btn btn-danger" @click="deleteCard(card.id)">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade show" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">Chỉnh sửa thông tin Card</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeEditModal"></button>
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeEditModal">Đóng</button>
            <button type="button" class="btn btn-primary" @click="saveEditedCard">Lưu</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'products',
    data() {
        return {
            products: [],
            editedCard: null, // Lưu trữ card đang được chỉnh sửa
            isEditModalOpen: false // Trạng thái hiển thị Modal
        }
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            axios.get('http://127.0.0.1:8000/api/products').then(res => {
                this.products = res.data.products;
                console.log(this.products)
            })
        },
        editCard(cardId) {
            console.log('open edit')
            // Tìm card cần chỉnh sửa dựa vào cardId và lưu vào biến editedCard
            this.editedCard = this.products.find(card => card.id === cardId);

            // Mở Modal
            this.isEditModalOpen = true;
        },
    }
}
</script>