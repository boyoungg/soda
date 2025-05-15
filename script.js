// 수 입력 조정 함수
function adjust(id, change) {
  const input = document.getElementById(id);
  let value = parseInt(input.value) || 0;
  value = Math.max(0, value + change);
  input.value = value;
}

// 금액 포맷
function formatMoney(amount) {
  return "₩" + amount.toLocaleString();
}

// 계산 함수
function calculate() {
  const siteType = document.getElementById("siteType").value;
  const subpages = parseInt(document.getElementById("subpages").value);
  const featureDev = document.getElementById("featureDev").value;
  const revisions = parseInt(document.getElementById("revisions").value);
  const maintenance = parseInt(document.getElementById("maintenance").value);

  let total = 0;
  let details = "";

  // 홈페이지 기본 비용
  let basePrice = siteType === "landing" ? 500000 : 1800000;
  total += basePrice;
  details += `<div class="item">홈페이지 종류: ${
    siteType === "landing" ? "랜딩페이지" : "기업형 홈페이지"
  } → ${formatMoney(basePrice)}</div>`;

  // 서브페이지 추가 비용
  const extraPages = Math.max(0, subpages - 5);
  const pageCostPerExtra = siteType === "landing" ? 70000 : 150000;
  const extraPageCost = extraPages * pageCostPerExtra;
  total += extraPageCost;
  details += `<div class="item">서브페이지: ${subpages}개 (추가 ${extraPages}개 × ${formatMoney(
    pageCostPerExtra
  )}) → ${formatMoney(extraPageCost)}</div>`;

  // 기능 개발
  const featureCost = featureDev === "custom" ? 100000 : 0;
  total += featureCost;
  details += `<div class="item">기능 개발: ${
    featureDev === "custom" ? "추가 개발 필요" : "무료 기능만"
  } → ${formatMoney(featureCost)}</div>`;

  // 수정 횟수
  const extraRevisions = Math.max(0, revisions - 5);
  const revisionCost = extraRevisions * 30000;
  total += revisionCost;
  details += `<div class="item">수정 횟수: ${revisions}회 (추가 ${extraRevisions}회 × ₩30,000) → ${formatMoney(
    revisionCost
  )}</div>`;

  // 유지보수
  const extraMaintenance = Math.max(0, maintenance - 1);
  const maintenanceCost = extraMaintenance * 100000;
  total += maintenanceCost;
  details += `<div class="item">유지보수: ${maintenance}회 (추가 ${extraMaintenance}회 × ₩100,000) → ${formatMoney(
    maintenanceCost
  )}</div>`;

  // 최종 금액
  details += `<div class="total">총 견적 금액: ${formatMoney(total)}</div>`;

  document.getElementById("result").innerHTML = details;
}
