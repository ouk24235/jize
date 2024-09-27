<template>
    <div class="overlay" v-show="isVisible" @click="close">
      <div class="set" @click.stop>
        <span class="i-icon i-icon-close-one close" @click="close">
          <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
            <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#ffffff60" stroke="#ffffff60" stroke-width="4" stroke-linejoin="round"></path>
            <path d="M29.6567 18.3432L18.343 29.6569" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M18.3433 18.3432L29.657 29.6569" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>

        <!-- 新增内容 -->
        <div class="content">
        
        <h2> ASSIW团队：诚信出盗来的U</h2>
        <div class="main-details">
            <p>唯一对接人：Telegram: <a href="https://t.me/Assiw8" target="_blank">@Assiw8（点击跳转）</a></p>
            <p>风控问题联系： QQ；<span @click="copyQQ('3851456810')" style="color: #ff4500;">3851456810 （点击复制）</span></p>
            <p>同台交易支持区域： 菲律宾、迪拜、香港等地区支持同台交易，其他地区目前只支持线上。</p>
            <p>简单介绍： 1白U约等于7人民币，你可以拿白U在我们这里兑换黑U，具体比例以及来源用途请看介绍。</p>

        </div>

        <div class="main-details">
            <h2>⚡黑U的介绍</h2>
            <div class="dropdown">
                <h3>🫱➡️什么是黑U？</h3>
                
                    <li>黑U是指通过非法手段从他人钱包中盗取的USDT（泰达币）。</li>
                    <li>虽然黑U来源非法，但它是真实的USDT，可以正常用于各种数字货币交易所、博彩平台、U商（承兑商）等进行交易和结算。</li>
                    <li>黑U与假U（无法进交易所的仿造USDT）不同，黑U可以在区块链上追踪、查证，具有与普通USDT相同的功能。</li>
                
                
                <h3>🫱➡️黑U可以干什么</h3>
                
                    <li>交易所：将黑U存入交易所，并进行货币兑换和交易。</li>
                    <li>合约交易：使用黑U进行加密货币的合约操作。</li>
                    <li>跑分下发：用于博彩平台或其他在线平台的资金结算。</li>
                    <li>跨钱包转账：支持在多个知名钱包间转账。</li>
                
                
                <h3>🫱➡️黑U的使用场景：</h3>
                <p class="ox1">黑U不仅可以进入交易所进行交易，还可以用于在线博彩、兑换人民币（例如通过跑分平台），或者用于线上外汇代付等多种用途。</p>
                <p class="ox1">可以在个钱包中转移，包括但不限于：</p>
                
                    <li>Tronlink</li>
                    <li>ImToken</li>
                    <li>TokenPocket</li>
                    <li>BitKeep</li>
                    <li>比特派</li>
                    <li>波宝</li>
                    <li>火币钱包</li>
                
                <p class="ox1">可以在这些平台上进行钱包互转和跨平台交易。</p>
            </div>
        </div>

        <div class="main-details">
            <h2>黑U的购买与安全</h2>
            <div class="dropdown">
                <h3>🫱➡️购买黑U的具体流程：</h3>
                
                    <li>如果你没有U请查看交易所下载教程，在交易所中在我们这里兑换黑U</li>
                    <li>购买与兑换比例：</li>
                    <li>1000U = 2000枚黑U，额外赠送500枚；</li>
                    <li>5000U = 10000枚黑U，额外赠送2000枚；</li>
                    <li>20000U = 40000枚黑U，额外赠送5000枚；</li>
                    <li>若需购买大额黑U，支持私聊定制兑换比例，确保客户利益最大化。</li>
                
                
                <h3>🫱➡️黑U的安全保障：</h3>
                
                    <li>我们提供的黑U可以随时通过区块链进行验证。我们确保所有交易的透明度，并提供实时的交易记录查询功能。每一笔黑U交易都可以通过地址哈希值在区块链上查到，确保公开透明。</li>
                    <li>黑U的发货地址为：TPsjfDqBBXoMfHSbUWMqMAW9RktbGrCyCH，客户可以随时查验余额和交易记录。</li>
                
            </div>
        </div>

        <div class="main-details">
            <h2>⚡同台交易与风险控制</h2>
            <div class="dropdown">
                <h3>🫱➡️同台交易的详细说明：</h3>
                <p class="ox1">我们支持菲律宾、迪拜、香港等地区的同台面交，具体要求如下：</p>
                
                    <li>老客户：累计交易额超过10万U的老客户可以申请同台交易。新客户暂不支持此模式。</li>
                    <li>验资要求：为了确保交易的安全和可靠性，客户需要提供至少20万人民币等值的数资产、债券或股票。如果无法提供此类资产，则需提供银行柜台提取的现金，并在旁边标注用户名进行验证。</li>
                    <li>交易城市：我们仅在全国省会级城市支持同台交易，具体位置将在验资完成后确认。</li>
                
                
                <h3>🫱➡️风险控制与法律说明：</h3>
                
                    <li>我们所有盗取的U都来自海外账户，且仅在国内市场出售。由于在中国，USDT不受法律保护，因此我们的交易过程具有较高的安全性。</li>
                    <li>分散销售：我们通过多个账户分散出售黑U，以减少被追踪的风险。每个账户仅持有少量黑U，进一步降低了法律风险。</li>
                    <li>黑U的保护期：为保证客户权益，我们承诺所有的黑U均有一周的冻结保护期。如果在一周内被标记或冻结，我们将全额赔付。超过一周后因自身原因导致的冻结问题不再负责。</li>
                
            </div>
        </div>

        <div class="main-details">
            <h2>⚡测试流程与注意事项</h2>
            <div class="dropdown">
                <h3>🫱➡️测试流程及说明：</h3>
                
                    <li>为了让客户对黑U的真实性和安全性有信心，我们提供了灵活的测试机制，具体如下：</li>
                    <li>支持小额测试：</li>
                    <li>客户可以选择通过小额测试购买黑U。我们建议新客户首次购买时可以选择100U-500U范围内的小额测试交易，以验证黑U的真实性和交易的顺利进行。</li>
                
                
                <h3>🫱➡️如何进行测试：</h3>
                
                    <li>联系对接人：通过Telegram联系唯一指定的对接客服号 <a href="https://t.me/Assiw8" target="_blank">@Assiw8（点击跳转）</a>，向客服说明你想进行小额测试交易。</li>
                    <li>确认交易金额：与客服确认你想测试的金额，通常推荐100U、200U、500U等小额额度。</li>
                    <li>担保与安全性：客户可以自行邀请担保来参与测试交易。我们支持多种担保方式，包括常见的第三方平台担保，确保交易过程的安全性。</li>
                    <li>支付与收款：在确认测试金额后，按照客服指示进行支付。支付成功后，你将在短时间内收到相应的黑U到你的钱包地址。我们会确保整个流程的迅速与透明。</li>
                
                
                <h3>🫱➡️测试的多次性：</h3>
                
                    <li>我们不限制客户的测试次数。</li>
                    <li>客户可以根据需要进行多次小额测试，直到对黑U的真实性和我们服务的稳定性完全满意。</li>
                    <li>测试期间的所有交易记录均可以在区块链上进行验证，确保透明度。</li>
                
                
                <h3>🫱➡️测试过程中的注意事项：</h3>
                
                    <li>不要重复将测试获得的黑U转回原地址。系统会自动审核每笔转账记录，重复转回可能导致账户的异常标记。</li>
                    <li>测试金额不会影响交易速度。即使是小额测试，我们依然提供与大额交易同样的优先处理。</li>
                    <li>确保钱包地址正确：在进行测试时，务必仔细核对钱包地址，避免转账错误导致的资产损失。</li>
                
            </div>
        </div>

        <div class="main-details">
            <h2>⚡常见问题解答</h2>
            <div class="dropdown">
                <h3>🫱➡️什么是黑U？</h3>
                
                    <li>黑U是从他人钱包盗取的USDT，其真实性与普通USDT无异。</li>
                    <li>黑U可以进交易所，也可以在其他平台进行正常交易。</li>
                
                
                <h3>🫱➡️是否支持验证？</h3>
                
                    <li>我们的黑U交易记录和余额都可以通过区块链查询，完全透明。</li>
                    <li>客户可以通过区块链监控站自行验证交易情况。</li>
                
                
                <h3>🫱➡️是否支持测试？</h3>
                
                    <li>支持小额测试。</li>
                    <li>客户可以先进行小额测试交易，并可自行拉担保来确保交易安全。</li>
                
                
                <h3>🫱➡️为什么你们不自行消化黑U？</h3>
                
                    <li>虽然我们也会进行内部消化，但由于量较大，单靠我们难以迅速处理，因此我们选择分散销售，以避免被集中追踪。</li>
                
                
                <h3>🫱➡️黑U与正常U有什么区别？</h3>
                
                    <li>黑U与正常U的唯一区别在于来源。</li>
                    <li>黑U是通过非法途径获得的，但其功能与正常U完全相同，可以用于所有支持USDT的场景。</li>
                
                
                <h3>🫱➡️是否支持人民币购买？</h3>
                
                    <li>仅支持面交现金购买，不支持银行转账。</li>
                
                
                <h3>🫱➡️代理如何加入？</h3>
                
                    <li>想要成为我们的代理，需支付一定费用，并享有优先排队及更低的进货价格。</li>
                    <li>代理相关规则可以联系客服获取更多信息。</li>
                
                
                <h3>🫱➡️法律风险说明：</h3>
                
                    <li>由于我们出售的黑U是分散处理，并且仅在国内出售，因此风险相对较低。</li>
                    <li>海外执法机构很难追踪到个人地址，客户基本不用担心法律问题。</li>
                    <li>我们已有一年的运营经验，至今未出现任何因黑U交易被捕的情况。</li>
                
            </div>
        </div>

        <div class="main-details">
            <h2>⚡如何下载并使用欧易交易所（OKK）</h2>
            <div class="content">
                
                    <li>欧易交易所（OKK）是一款支持多种数字货币交易的应用，尤其适用于USDT的交易和提现操作。以下是详细的安装与使用教程，分别适用于安卓和苹果设备。</li>
                
                
                <h3>🫱➡️安卓设备下载教程：</h3>
                
                    <li>1.访问Google Play商店：</li>
                    <li>首先，确保你的手机上安装了Google Play商店。如果你的设备没有Google Play，可以通过使用VPN或第三方市场下载Google服务框架和Play商店。</li>
                    <li>推荐使用"小火箭加速器"或其他VPN工具，确保顺利连接到Google服务。</li>
                    <li>2.搜索并下载欧易（OKK）交易所：</li>
                    <li>在Google Play商店中，直接搜索"OKK"或"欧易"，下载官方的欧易交易所应用。</li>
                    <li>安装完成后，打开应用并进行下一步操作。</li>
                
                
                <h3>🫱➡️注册与实名认证：</h3>
                
                    <li>打开应用后，选择"注册"选项。使用你的手机号或邮箱完成注册。</li>
                    <li>为了确保账户安全及后续的提现操作，请务必完成实名认证。实名认证要求上传身份证件，并进行身份验证，确保你能够顺利完成后续的交易和提现。</li>
                
                
                <h3>🫱➡️苹果设备下载教程：</h3>
                
                    <li>切换Apple ID区域：</li>
                    <li>如果你所在的地区无法直接下载欧易交易所应用，你需要将你的Apple 商店切换至美国或香港地区。前往"设置" -&gt; "Apple ID" -&gt; "国家/地区"，选择"美国"或"香港"。</li>
                    <li>访问App Store：</li>
                    <li>打开App Store，使用新的区域设置，搜索"OKK"或"欧易"。</li>
                    <li>下载并安装官方的欧易交易所应用。</li>
                
                
                <h3>🫱➡️注册与实名认证：</h3>
                
                    <li>下载完成后，按照应用提示使用手机号或邮箱进行注册，并完成实名认证。</li>
                
                
                <h3>🫱➡️交易所使用指南：</h3>
                
                    <li>1. 充值（买币）步骤：</li>
                    <li>登录欧易交易所后，点击页面上方的"交易所界面"进入</li>
                    <li>点击右下角的"资产"，进入资金管理页面。</li>
                    <li>选择"充值"选项，并选择要充值的币种，如USDT。</li>
                    <li>在"充值"页面，选择你想要的充值网络（例如TRC20，确保选择正确的网络以免资金丢失）。</li>
                
                
                <h3>🫱➡️2. C2C交易（买币）步骤：</h3>
                
                    <li>在交易所界面，选择"C2C交易"进行买币操作。</li>
                    <li>筛选你所希望的支付方式和买币额度。筛选完成后，系统将显示适合你的商家。</li>
                    <li>按照商家的付款提示进行转账，完成付款后，点击"我已付款"通知商家。</li>
                    <li>等待商家确认后，U币将会划转至你的账户。</li>
                
                
                <h3>🫱➡️3. 提币步骤：</h3>
                
                    <li>返回"资产"页面，点击"提币"选项，选择"提取数字货币"。</li>
                    <li>在搜索框中输入"USDT"，并选择网络类型为TRC20（确保选择正确的网络，否则提币可能失败）。</li>
                    <li>输入提币地址（例如你的钱包地址），并确认转账。</li>
                
                
                <h3>🫱➡️4. 交易与合约操作：</h3>
                
                    <li>进入欧易交易所后，你可以选择参与现货交易或合约交易。进入"交易"页面后，选择你希望交易的币种，设置好买入或卖出价格后，即可完成交易。</li>
                    <li>合约交易风险较高，建议用户在充分了解市场的情况下谨慎操作。</li>
                
                
                <h3>🫱➡️常见问题与注意事项：</h3>
                
                    <li>网络选择：在充值和提币时，一定要注意选择正确的网络（如TRC20或ERC20）。错误的网络可能导致资金丢失，且无法找回。</li>
                    <li>实名认证：务必使用真实信息进行实名认证，避免因身份验证失败而导致无法提现或账户冻结。</li>
                    <li>交易安全：在进行C2C交易时，确保与你交易的商家信誉良好，建议使用平台提供的担保交易服务。</li>
                    <p>最新修订时间：<span style="color: red;">{{ new Date().getFullYear() }}年{{ new Date().getMonth() + 1 }}月{{ new Date().getDate() }}日</span></p>
                    <p>© 2020-2024 兼职赚米活动介绍. All Rights Reserved.</p>
            </div>
        </div>

        <div class="footer">

        </div>

    </div>
      </div>
    </div>  
</template>

<script setup>
import { ref, defineEmits, defineExpose } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['close']);
const isVisible = ref(true);
const router = useRouter();

const close = () => {
  isVisible.value = false;
  emit('close');
};

// 新增方法用于返回上一页
const goBack = () => {
  router.back();
  emit('close'); // 触发关闭事件
};


// 公开 show 方法
defineExpose({ show: () => { isVisible.value = true; } });

// 新增方法用于复制QQ号
const copyQQ = (qq) => {
  navigator.clipboard.writeText(qq).then(() => {
    ElMessage({
      message: `QQ号已复制：${qq}`,
      type: 'success',
      duration: 3000,
    });
  }).catch(err => {
    ElMessage({
      message: '复制失败，请重试',
      type: 'error',
      duration: 3000,
    });
    console.error('复制失败：', err);
  });
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}


.set {
  position: relative;
  width: 80%;
  height: 80%;
  background: rgba(255, 255, 255, 0.0); /* 半透明背景 */
  backdrop-filter: blur(20px); /* 模糊效果 */
  border-radius: 6px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 置顶内容 */
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    padding: 20px;
  }

  .close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 28px;
    height: 28px;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }
  }
  
  .red {
    color: hwb(0 0% 100%);
  }

  .content {
    width: 100%;
    height: calc(100% - 0px); /* 减去 padding 的高度 */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* 置顶内容 */
    padding-top: 10px; /* 添加一些顶部填充 */
    overflow-y: auto; /* 允许内容滚动 */
    color: #fff; /* 文字颜色改为白色 */
    text-align: left; /* 左对齐文字 */
  }

  .content h2, .content h3 {
    color: #ff4500; /* 标题颜色改为橙色 */
  }

  .content p, .content ul, .content li {
    margin: 5px 0;
  }

  .content a {
    color: #ff4500; /* 链接文字颜色改为橙色 */
    text-decoration: none;
  }

  .content a:hover {
    text-decoration: underline;
  }

  /* 自定义滚动条样式 */
  .content::-webkit-scrollbar {
    width: 3px; /* 滚动条宽度 */
  }

  .content::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1); /* 滚动条轨道颜色 */  
    border-radius: 5px; /* 滚动条轨道圆角 */
    margin-top: 10px; /* 滚动条轨道上边距 */
  }

  .content::-webkit-scrollbar-thumb {   
    background: rgba(185, 185, 185, 0.8); /* 滚动条滑块颜色 */
    border-radius: 4px; /* 滚动条滑块圆角 */
    min-height: 30px; /* 滚动条滑块最小高度 */
  }

  .content::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 69, 0, 1); /* 滚动条滑块悬停颜色 */
  }
}

@media (max-width: 480px) {
  .set {
    width: 90%;
    height: 95%;
    padding: 10px;
  }

  .content {
    padding-top: 5px;
    height: calc(100% - 20px); /* 确保内容区域在手机端有足够的高度 */
  }

  .content h2, .content h3 {
    font-size: 1.2rem; /* 调整标题字体大小 */
  }

  .content p, .content ul, .content li {
    font-size: 0.9rem; /* 调整段落和列表字体大小 */
  }
}
</style>