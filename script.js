document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('hearts');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Các hàm và đối tượng Heart không cần thay đổi

    function createFloatingHearts() {
        const numHearts = 100;
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.innerText = '❤️';
            document.body.appendChild(heart);
        }
    }

    window.addEventListener('load', function() {
        loop();
        showLetter();
        createFloatingHearts();
        backgroundMusic.play(); // Play background music when page loads
        generateHearts(); // Gọi hàm để tạo và di chuyển các hình trái tim
    });

    // Thêm sự kiện click vào nút "Mở bức thư"
    document.getElementById('openLetterButton').addEventListener('click', function() {
        // Hiển thị hình ảnh hi1.jpg
        document.getElementById('letterImage').src = 'hi1.jpg';

        // Hiển thị nội dung bức thư
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('goodbyeMessage').classList.remove('hidden');

        // Ẩn nút "Mở bức thư"
        this.classList.add('hidden');
    });

    document.addEventListener('click', function(event) {
        if (event.target !== this && event.target !== heartOverlay) {
            toggleHeart(event);
        }
    });

    document.addEventListener('click', function(event) {
        showLove(event);
    });

    // Đợi 1 giây sau đó hiển thị chữ "Hi there"
    setTimeout(function() {
        document.getElementById('hiThereText').classList.remove('hidden');
    }, 1000);

    // Chờ 10 giây sau khi chữ "Hi there" xuất hiện
    setTimeout(function() {
        // Lấy thẻ nút mở bức thư
        var openLetterButton = document.getElementById('openLetterButton');
        // Thêm lớp visible vào nút mở bức thư để hiển thị nó
        openLetterButton.classList.add('visible');
    }, 10000); // 10 giây

    // Chờ 30 giây sau khi chữ "Hi there" xuất hiện
    setTimeout(function() {
        // Lấy thẻ nút mở bức thư
        var openLetterButton = document.getElementById('openLetterButton');
        // Thêm lớp visible vào nút mở bức thư để hiển thị nó
        openLetterButton.classList.add('visible');
    }, 30000); // 30 giây
});
document.getElementById('openLetterButton').addEventListener('click', function() {
    // Ẩn nút "Mở lá thư"
    this.classList.remove('visible');
    this.classList.add('hidden');

    // Hiển thị hình ảnh lá thư
    document.getElementById('letterImage').src = 'hi1.jpg';
    
    // Hiển thị nội dung của bạn
    const yourContent = "Nội dung của bạn ở đây";
    const contentElement = document.getElementById('contentOverlay');
    contentElement.innerText = yourContent;
    contentElement.classList.remove('hidden');

    // Xóa các trái tim
    const hearts = document.getElementsByClassName('heart');
    while (hearts.length > 0) {
        hearts[0].parentNode.removeChild(hearts[0]);
    }

    // Hiển thị nội dung bức thư container
    document.getElementById('loveLetterContainer').classList.add('visible');

    // Hiển thị nội dung từng từ
    showNextWord();
});


// Tạo hình trái tim và thêm vào trang web
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-icon');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(heart);
    // Xóa hình trái tim sau khi hoàn thành animation
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Lấy nội dung của bức thư
const loveLetter = "Nội dung bức thư của bạn ở đây";

// Chuyển nội dung thành mảng các từ
const words = loveLetter.split(' ');

// Lấy phần tử hiển thị nội dung bức thư
const letterElement = document.getElementById('loveLetter');

// Biến để theo dõi từ hiện tại
let currentWordIndex = 0;

// Hàm hiển thị từ tiếp theo
function showNextWord() {
    if (currentWordIndex < words.length) {
        letterElement.textContent += words[currentWordIndex] + ' ';
        currentWordIndex++;
        setTimeout(showNextWord, 1000); // Hiển thị từ tiếp theo sau 1 giây
    } else {
        // Kết thúc hiển thị nội dung bức thư
        // Hiển thị nút đóng bức thư hoặc thực hiện các hành động khác
    }
}

// Sự kiện khi nhấn nút mở bức thư
document.getElementById('openLetterButton').addEventListener('click', function() {
    // Ẩn nút mở bức thư
    this.style.display = 'none';
    // Hiển thị phần nội dung bức thư
    letterElement.classList.remove('hidden');
    // Bắt đầu hiển thị từng từ trong nội dung
    showNextWord();
});

// Tạo hình trái tim liên tục
function generateHearts() {
    setInterval(createHeart, 1000); // Tạo một trái tim mỗi giây
}

const loveSound = new Audio('music.mp3'); // Đường dẫn đến file âm thanh
function showLove(event) {
    // Các công việc khác...
    loveSound.play(); // Play âm thanh
}


// Hàm tạo một trái tim mới
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    document.body.appendChild(heart);

    // Thiết lập vị trí và kích thước ngẫu nhiên cho trái tim
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    const size = Math.random() * 20 + 10; // Kích thước từ 10 đến 30px

    heart.style.left = `${left}px`;
    heart.style.top = `${top}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Bắt đầu animation cho trái tim
    animateHeart(heart);
}

// Hàm thực hiện animation cho trái tim
function animateHeart(heart) {
    // Tính toán một vị trí mới cho trái tim
    const newLeft = Math.random() * window.innerWidth;
    const newTop = Math.random() * window.innerHeight;

    // Thực hiện di chuyển đến vị trí mới trong 2 giây
    heart.animate([
        { left: heart.style.left, top: heart.style.top },
        { left: `${newLeft}px`, top: `${newTop}px` }
    ], {
        duration: 30000,
        iterations: Infinity, // Lặp vô hạn
        easing: "linear"
    });
}
document.addEventListener("DOMContentLoaded", function() {
    var hiThereText = document.getElementById("hiThereText");
    hiThereText.classList.add("fade-out-animation");
});
document.getElementById('openLetterButton').addEventListener('click', function() {
    // Ẩn nút "Mở lá thư"
    this.classList.remove('visible');
    this.classList.add('hidden');
    // Hiện hình ảnh lá thư
    document.getElementById('letterImage').src = 'hi1.jpg';

    // Lấy thông điệp chào mừng
    const greetingMessage = "Chào bạn mình là bình chào mừng bạn đến với tôi!";
    const messageElement = document.getElementById('message');

    // Đặt cờ là true để đánh dấu lá thư đã được mở
    letterOpened = true;

    // Hàm hiển thị từng ký tự
    function displayMessageCharacters(index) {
        if (index < greetingMessage.length) {
            // Thêm ký tự tiếp theo
            messageElement.innerHTML += greetingMessage.charAt(index);
            // Gọi hàm đệ quy cho ký tự tiếp theo sau một khoảng thời gian
            setTimeout(function() {
                displayMessageCharacters(index + 1);
            }, 100); // Điều chỉnh thời gian chờ (hiện đang là 100 mili giây) để kiểm soát tốc độ gõ phím
        } else {
            // Hiển thị nội dung khác sau khi nội dung hiện tại đã hoàn tất
            displayAnotherContent();
        }
    }

    // Bắt đầu hiển thị ký tự
    displayMessageCharacters(0);

    // Hàm hiển thị nội dung khác
    function displayAnotherContent() {
        // Thực hiện các hành động bạn muốn khi nội dung trước đã hoàn tất
    }
});
// Lấy thông điệp chào mừng
const greetingMessage = "";
const messageElement = document.getElementById('message');

// Đặt cờ là true để đánh dấu lá thư đã được mở
let letterOpened = true;

// Hàm hiển thị từng ký tự
function displayMessageCharacters(index) {
    if (index < greetingMessage.length) {
        // Thêm ký tự tiếp theo
        messageElement.innerHTML += greetingMessage.charAt(index);
        // Gọi hàm đệ quy cho ký tự tiếp theo sau một khoảng thời gian
        setTimeout(function() {
            displayMessageCharacters(index + 1);
        }, 100); // Điều chỉnh thời gian chờ (hiện đang là 100 mili giây) để kiểm soát tốc độ gõ phím
    }
}

// Bắt đầu hiển thị ký tự
displayMessageCharacters(0);
// Sự kiện khi nhấn nút mở bức thư
document.getElementById('openLetterButton').addEventListener('click', function() {
    // Ẩn nút mở bức thư
    this.style.display = 'none';
    // Hiển thị phần nội dung bức thư
    letterElement.classList.remove('hidden');
    // Bắt đầu hiển thị từng từ trong nội dung
    showNextWord();
});

// Hàm hiển thị từ tiếp theo
function showNextWord() {
    if (currentWordIndex < words.length) {
        letterElement.textContent += words[currentWordIndex] + ' ';
        currentWordIndex++;
        setTimeout(showNextWord, 1000); // Hiển thị từ tiếp theo sau 1 giây
    } else {
        // Kết thúc hiển thị nội dung bức thư
        // Hiển thị nút đóng bức thư hoặc thực hiện các hành động khác
        // Hiển thị dòng chữ "Nội dung bức thư của bạn ở đây" khi kết thúc
        letterElement.textContent += '';
    }
}document.addEventListener('DOMContentLoaded', function() {
    // Số lượng trái tim bạn muốn hiển thị
    const numHearts = 40; // Thay đổi số lượng trái tim tùy thích

    // Tạo và thêm các trái tim vào trang web
    for (let i = 0; i < numHearts; i++) {
        createHeart();
    }
});

// Hàm tạo một trái tim mới và di chuyển
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);

    // Thiết lập vị trí và kích thước ngẫu nhiên cho trái tim
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    const size = Math.random() * 20 + 10; // Kích thước từ 10 đến 30px

    heart.style.left = `${left}px`;
    heart.style.top = `${top}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Bắt đầu animation cho trái tim
    animateHeart(heart);
}

// Hàm thực hiện animation cho trái tim
function animateHeart(heart) {
    // Tính toán một vị trí mới cho trái tim
    const newLeft = Math.random() * window.innerWidth;
    const newTop = Math.random() * window.innerHeight;

    // Thực hiện di chuyển đến vị trí mới trong 2 giây
    heart.animate([
        { left: heart.style.left, top: heart.style.top },
        { left: `${newLeft}px`, top: `${newTop}px` }
    ], {
        duration: 30000,
        iterations: Infinity, // Lặp vô hạn
        easing: "linear"
    });
}

// Hàm tạo nhiều trái tim chạy bồng bềnh quanh trang web
function createFloatingHearts() {
    const numHearts = 100;
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.innerText = '❤️';
        document.body.appendChild(heart);
    }
}
document.getElementById('openLetterButton').addEventListener('click', function() {
    // Ẩn nút "Mở lá thư"
    this.classList.remove('visible');
    this.classList.add('hidden');

    // Hiển thị nội dung bức thư container
    document.getElementById('loveLetterContainer').classList.add('visible');

    // Bắt đầu hiển thị từng từ trong nội dung
    showNextWord();
});

// Hàm hiển thị từ tiếp theo
function showNextWord() {
    if (currentWordIndex < words.length) {
        // Thêm từ tiếp theo vào nội dung
        letterElement.textContent += words[currentWordIndex] + ' ';
        currentWordIndex++;

        // Scroll đến cuối nội dung
        letterElementContainer.scrollTop = letterElementContainer.scrollHeight;

        setTimeout(showNextWord, 1000); // Hiển thị từ tiếp theo sau 1 giây
    } else {
        // Kết thúc hiển thị nội dung bức thư
        // Hiển thị nút đóng bức thư hoặc thực hiện các hành động khác
    }
}
document.getElementById('openLetterButton').addEventListener('click', function() {
    // Ẩn nút "Mở lá thư"
    this.classList.remove('visible');
    this.classList.add('hidden');
    // Hiện hình ảnh lá thư
    document.getElementById('letterImage').src = 'hi1.jpg';

    // Lấy thông điệp chào mừng
    const greetingMessage = "Chào bạn! Mình là bình chào mừng bạn đến với tôi!";

    // Hiển thị thông điệp chào mừng
    displayGreetingMessage(greetingMessage);
});

// Hàm hiển thị thông điệp chào mừng
function displayGreetingMessage(message) {
    const messageElement = document.getElementById('message');

    // Hiển thị message từng ký tự một sau mỗi khoảng thời gian
    let index = 0;
    const displayInterval = setInterval(function() {
        if (index < message.length) {
            messageElement.textContent += message[index];
            index++;
        } else {
            // Khi hiển thị xong message, dừng setInterval
            clearInterval(displayInterval);

            // Hiển thị nội dung bức thư
            document.getElementById('loveLetterContainer').classList.remove('hidden');
        }
    }, 100); // Thời gian hiển thị mỗi ký tự
}

document.addEventListener('DOMContentLoaded', function() {
    // Số lượng trái tim bạn muốn hiển thị
    const numHearts = 40; // Thay đổi số lượng trái tim tùy thích

    // Tạo và thêm các trái tim vào trang web
    for (let i = 0; i < numHearts; i++) {
        createHeart();
    }

    // Chờ 10 giây sau khi trang đã được tải xong
    setTimeout(function() {
        // Lấy thẻ nút mở bức thư
        var openLetterButton = document.getElementById('openLetterButton');
        // Thêm lớp visible vào nút mở bức thư để hiển thị nó
        openLetterButton.classList.add('visible');
    }, 10000); // 10 giây

    // Chờ 30 giây sau khi trang đã được tải xong
    setTimeout(function() {
        // Lấy thẻ nút mở bức thư
        var openLetterButton = document.getElementById('openLetterButton');
        // Thêm lớp visible vào nút mở bức thư để hiển thị nó
        openLetterButton.classList.add('visible');
    }, 30000); // 30 giây

    // Thêm sự kiện click vào nút "Mở bức thư"
    document.getElementById('openLetterButton').addEventListener('click', function() {
        // Hiển thị hình ảnh hi1.jpg
        document.getElementById('letterImage').src = 'hi1.jpg';

        // Hiển thị nội dung bức thư
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('goodbyeMessage').classList.remove('hidden');

        // Ẩn nút "Mở bức thư"
        this.classList.add('hidden');
    });
});

        document.addEventListener('DOMContentLoaded', function() {
            // Ẩn văn bản "Xin chào" khi trang web tải xong
            document.getElementById('hiThereText').classList.add('hidden');
            
            // Ẩn nút "Mở lá thư" khi trang web tải xong
            document.getElementById('openLetterButton').classList.add('hidden');

            // Hiển thị chữ "Mở bức thư" sau 10 giây
            setTimeout(function() {
                document.getElementById('openLetterButton').classList.remove('hidden');
            }, 10000);
        });

        document.getElementById('openLetterButton').addEventListener('click', function() {
            // Ẩn nút "Mở lá thư"
            this.classList.remove('visible');
            this.classList.add('hidden');
            // Hiện hình ảnh lá thư
            document.getElementById('letterImage').src = 'hi1.jpg';
            
            // Lấy thông điệp chào mừng
            const greetingMessage = "Chào bạn mình là bình chào mừng bạn đến với tôi!";
            const messageElement = document.getElementById('message');
            

            // Đặt cờ là true để đánh dấu lá thư đã được mở
            letterOpened = true;

            // Hàm hiển thị từng ký tự
            function displayMessageCharacters(index) {
                if (index < greetingMessage.length) {
                    // Thêm ký tự tiếp theo
                    messageElement.innerHTML += greetingMessage.charAt(index);
                    // Gọi hàm đệ quy cho ký tự tiếp theo sau một khoảng thời gian
                    setTimeout(function() {
                        displayMessageCharacters(index + 1);
                    }, 100); // Điều chỉnh thời gian chờ (hiện đang là 100 mili giây) để kiểm soát tốc độ gõ phím
                }
            }

            // Bắt đầu hiển thị ký tự
            displayMessageCharacters(0);

            // Hiển thị chữ "Xin chào" khi mở lá thư
            document.getElementById('hiThereText').classList.remove('hidden');
        });
        document.getElementById('openLetterButton').addEventListener('click', function() {
            // Ẩn nút "Mở lá thư"
            this.classList.remove('visible');
            this.classList.add('hidden');
        
            // Hiển thị hình ảnh lá thư
            document.getElementById('letterImage').src = 'hi1.jpg';
            
            // Hiển thị nội dung của bạn
            const yourContent = "Nội dung của bạn ở đây";
            const contentElement = document.getElementById('contentOverlay');
            contentElement.innerText = yourContent;
            contentElement.classList.remove('hidden');
        
            // Xóa các trái tim
            const hearts = document.getElementsByClassName('heart');
            while (hearts.length > 0) {
                hearts[0].parentNode.removeChild(hearts[0]);
            }
        
            // Hiển thị nội dung bức thư container
            document.getElementById('loveLetterContainer').classList.add('visible');
        
            // Hiển thị nội dung từng từ
            showNextWord();
        });
        document.addEventListener('DOMContentLoaded', function() {
            const canvas = document.getElementById('hearts');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        
            // Các hàm và đối tượng Heart không cần thay đổi
        
            // Tạo và di chuyển các hình trái tim liên tục
            generateHearts();
        
            // Hiển thị chữ "Hi there" sau 1 giây
            setTimeout(function() {
                document.getElementById('hiThereText').classList.remove('hidden');
            }, 1000);
        
            // Hiển thị nút "Mở bức thư" sau 10 giây
            setTimeout(function() {
                const openLetterButton = document.getElementById('openLetterButton');
                openLetterButton.classList.add('visible');
            }, 10000); // 10 giây
        
            // Hiển thị nút "Mở bức thư" sau 30 giây
            setTimeout(function() {
                const openLetterButton = document.getElementById('openLetterButton');
                openLetterButton.classList.add('visible');
            }, 30000); // 30 giây
        
            // Sự kiện khi nhấn nút "Mở bức thư"
            document.getElementById('openLetterButton').addEventListener('click', function() {
                // Ẩn nút "Mở lá thư"
                this.classList.remove('visible');
                this.classList.add('hidden');
        
                // Hiển thị hình ảnh lá thư
                document.getElementById('letterImage').src = 'hi1.jpg';
        
                // Hiển thị nội dung của bạn
                const yourContent = "Nội dung của bạn ở đây";
                const contentElement = document.getElementById('contentOverlay');
                contentElement.innerText = yourContent;
                contentElement.classList.remove('hidden');
        
                // Xóa các trái tim
                const hearts = document.getElementsByClassName('heart');
                while (hearts.length > 0) {
                    hearts[0].parentNode.removeChild(hearts[0]);
                }
        
                // Hiển thị nội dung bức thư container
                document.getElementById('loveLetterContainer').classList.add('visible');
        
                // Hiển thị nội dung từng từ
                showNextWord();
            });
        });
        
        // Tạo hình trái tim và thêm vào trang web
        function createHeart() {
            const heart = document.createElement("div");
            heart.className = "heart";
            document.body.appendChild(heart);
        
            // Thiết lập vị trí và kích thước ngẫu nhiên cho trái tim
            const left = Math.random() * window.innerWidth;
            const top = Math.random() * window.innerHeight;
            const size = Math.random() * 20 + 10; // Kích thước từ 10 đến 30px
        
            heart.style.left = `${left}px`;
            heart.style.top = `${top}px`;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
        
            // Bắt đầu animation cho trái tim
            animateHeart(heart);
        }
        
        // Hàm thực hiện animation cho trái tim
        function animateHeart(heart) {
            // Tính toán một vị trí mới cho trái tim
            const newLeft = Math.random() * window.innerWidth;
            const newTop = Math.random() * window.innerHeight;
        
            // Thực hiện di chuyển đến vị trí mới trong 2 giây
            heart.animate([
                { left: heart.style.left, top: heart.style.top },
                { left: `${newLeft}px`, top: `${newTop}px` }
            ], {
                duration: 30000,
                iterations: Infinity, // Lặp vô hạn
                easing: "linear"
            });
        }
        
        // Tạo nhiều trái tim chạy bồng bềnh quanh trang web
        function createFloatingHearts() {
            const numHearts = 100;
            for (let i = 0; i < numHearts; i++) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.innerText = '❤️';
                document.body.appendChild(heart);
            }
        }
        
        // Hàm hiển thị từ tiếp theo
        function showNextWord() {
            const loveLetter = "Nội dung bức thư của bạn ở đây";
            const words = loveLetter.split(' ');
            const letterElement = document.getElementById('loveLetter');
            let currentWordIndex = 0;
        
            function displayNextWord() {
                if (currentWordIndex < words.length) {
                    letterElement.textContent += words[currentWordIndex] + ' ';
                    currentWordIndex++;
                    setTimeout(displayNextWord, 1000); // Hiển thị từ tiếp theo sau 1 giây
                }
            }
        
            displayNextWord();
        }
        
        // Sự kiện khi nhấn nút mở bức thư
        document.getElementById('openLetterButton').addEventListener('click', function() {
            // Ẩn nút "Mở lá thư"
            this.style.display = 'none';
            // Hiển thị phần nội dung bức thư
            const letterElement = document.getElementById('loveLetter');
            letterElement.classList.remove('hidden');
            // Bắt đầu hiển thị từng từ trong nội dung
            showNextWord();
        });
        document.addEventListener('DOMContentLoaded', function() {
            const canvas = document.getElementById('hearts');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        
            // Các hàm và đối tượng Heart không cần thay đổi
        
            // Tạo và di chuyển các hình trái tim liên tục
            generateHearts();
        
            // Hiển thị chữ "Hi there" sau 1 giây
            setTimeout(function() {
                document.getElementById('hiThereText').classList.remove('hidden');
            }, 1000);
        
            // Hiển thị nút "Mở bức thư" sau 10 giây
            setTimeout(function() {
                const openLetterButton = document.getElementById('openLetterButton');
                openLetterButton.classList.add('visible');
            }, 10000); // 10 giây
        
            // Hiển thị nút "Mở bức thư" sau 30 giây
            setTimeout(function() {
                const openLetterButton = document.getElementById('openLetterButton');
                openLetterButton.classList.add('visible');
            }, 30000); // 30 giây
        
            // Sự kiện khi nhấn nút "Mở bức thư"
            document.getElementById('openLetterButton').addEventListener('click', function() {
                // Ẩn nút "Mở lá thư"
                this.classList.remove('visible');
                this.classList.add('hidden');
        
                // Hiển thị hình ảnh lá thư
                document.getElementById('letterImage').src = 'hi1.jpg';
        
                // Hiển thị nội dung của bạn
                const yourContent = "Nội dung của bạn ở đây";
                const contentElement = document.getElementById('contentOverlay');
                contentElement.innerText = yourContent;
                contentElement.classList.remove('hidden');
        
                // Xóa các trái tim
                const hearts = document.getElementsByClassName('heart');
                while (hearts.length > 0) {
                    hearts[0].parentNode.removeChild(hearts[0]);
                }
        
                // Hiển thị nội dung bức thư container
                document.getElementById('loveLetterContainer').classList.add('visible');
        
                // Hiển thị nội dung từng từ
                showNextWord();
            });
        });
        
        // Tạo hình trái tim và thêm vào trang web
        function createHeart() {
            const heart = document.createElement("div");
            heart.className = "heart";
            document.body.appendChild(heart);
        
            // Thiết lập vị trí và kích thước ngẫu nhiên cho trái tim
            const left = Math.random() * window.innerWidth;
            const top = Math.random() * window.innerHeight;
            const size = Math.random() * 20 + 10; // Kích thước từ 10 đến 30px
        
            heart.style.left = `${left}px`;
            heart.style.top = `${top}px`;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
        
            // Bắt đầu animation cho trái tim
            animateHeart(heart);
        }
        
        // Hàm thực hiện animation cho trái tim
        function animateHeart(heart) {
            // Tính toán một vị trí mới cho trái tim
            const newLeft = Math.random() * window.innerWidth;
            const newTop = Math.random() * window.innerHeight;
        
            // Thực hiện di chuyển đến vị trí mới trong 20 giây
            heart.animate([
                { left: heart.style.left, top: heart.style.top },
                { left: `${newLeft}px`, top: `${newTop}px` }
            ], {
                duration: 10000, // 20 giây
                easing: "linear"
            });
        }
        
        // Tạo nhiều trái tim chạy bồng bềnh quanh trang web
        function generateHearts() {
            const numHearts = 100;
            for (let i = 0; i < numHearts; i++) {
                createHeart();
            }
        }
        
        // Hàm hiển thị từ tiếp theo
        function showNextWord() {
            const loveLetter = "";
            const words = loveLetter.split('Nội dung bức thư của bạn ở đây ');
            const letterElement = document.getElementById('loveLetter');
            let currentWordIndex = 0;
        
            function displayNextWord() {
                if (currentWordIndex < words.length) {
                    letterElement.textContent += words[currentWordIndex] + ' ';
                    currentWordIndex++;
                    setTimeout(displayNextWord, 1000); // Hiển thị từ tiếp theo sau 1 giây
                }
            }
        
            displayNextWord();
        }
        document.addEventListener('DOMContentLoaded', function() {
            // Hiển thị hình ảnh của Bình và nội dung bức thư sau 10 giây
            setTimeout(function() {
                document.getElementById('binhImage').style.display = 'block';
                document.getElementById('loveLetter').style.display = 'block';
                displayLoveLetter(); // Hiển thị nội dung bức thư
            }, 12000); // 10 giây
        
            // Hàm hiển thị từng chữ trong phần loveLetter
            function displayLoveLetter() {
                const loveLetterContent = document.getElementById('loveLetter').innerHTML;
                const letterElement = document.getElementById('loveLetter');
                letterElement.innerHTML = ''; // Xóa nội dung ban đầu để thêm từng chữ
        
                let index = 0;
                const interval = setInterval(function() {
                    letterElement.innerHTML += loveLetterContent[index];
                    index++;
                    if (index >= loveLetterContent.length) {
                        clearInterval(interval); // Dừng hiển thị khi đã hiển thị hết nội dung
                    }
                }, 50); // Khoảng thời gian giữa mỗi chữ (ms)
            }
        });
        