#!/usr/bin/env bash
# 专家会议室 · Skill 五端同步安装脚本
#
# 以项目内 .cursor/skills/ 为唯一源，同步十个 Skill 到各工具用户级目录：
#   start-meeting（会议室主持人）+ 九位专家
#
#   Cursor  ~/.cursor/skills/
#   ZCode   ~/.zcode/skills/
#   Codex   ~/.codex/skills/
#   Grok    ~/.grok/skills/
#   Kimi    ~/.kimi/skills/
#
# 用法：
#   ./install.sh           安装 / 更新（覆盖旧版本）
#   ./install.sh --list    查看各工具当前安装状态
#   ./install.sh --remove  从所有工具卸载本套 Skill

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$SCRIPT_DIR/.cursor/skills"

SKILLS=(
  start-meeting
  marty-cagan
  don-norman
  ron-kohavi
  martin-fowler
  linus-torvalds
  bruce-schneier
  charity-majors
  michael-feathers
  werner-vogels
)

TARGETS=(
  "$HOME/.cursor/skills"
  "$HOME/.zcode/skills"
  "$HOME/.codex/skills"
  "$HOME/.grok/skills"
  "$HOME/.kimi/skills"
)

action="${1:-install}"

check_source() {
  for s in "${SKILLS[@]}"; do
    if [ ! -f "$SRC/$s/SKILL.md" ]; then
      echo "错误：源缺失 $SRC/$s/SKILL.md" >&2
      exit 1
    fi
  done
}

count_installed() {
  local base="$1" n=0 s
  for s in "${SKILLS[@]}"; do
    [ -f "$base/$s/SKILL.md" ] && n=$((n + 1))
  done
  echo "$n/${#SKILLS[@]}"
}

do_list() {
  printf "%-24s %s\n" "工具目录" "已装 Skill"
  printf "%-24s %s\n" "------------------------" "----------"
  for base in "${TARGETS[@]}"; do
    printf "%-24s %s\n" "$base" "$(count_installed "$base")"
  done
}

do_install() {
  check_source
  for base in "${TARGETS[@]}"; do
    mkdir -p "$base"
    for s in "${SKILLS[@]}"; do
      rm -rf "$base/$s"
      cp -R "$SRC/$s" "$base/$s"
    done
  done
  local fail=0 base s
  for base in "${TARGETS[@]}"; do
    for s in "${SKILLS[@]}"; do
      diff -r "$SRC/$s" "$base/$s" >/dev/null || { echo "校验失败：$base/$s" >&2; fail=1; }
    done
  done
  [ "$fail" -eq 0 ] || exit 1
  echo "已安装 ${#SKILLS[@]} 个 Skill（会议室 + 九位专家）× ${#TARGETS[@]} 个工具（$(( ${#SKILLS[@]} * ${#TARGETS[@]} )) 份），全部校验一致："
  do_list
}

do_remove() {
  for base in "${TARGETS[@]}"; do
    for s in "${SKILLS[@]}"; do
      rm -rf "$base/$s"
    done
  done
  echo "已从 ${#TARGETS[@]} 个工具目录移除本套 Skill。当前状态："
  do_list
}

case "$action" in
  install|--install|-i) do_install ;;
  list|--list|-l)       do_list ;;
  remove|--remove|-r)   do_remove ;;
  *)
    echo "用法：$0 [install|list|remove]" >&2
    exit 2
    ;;
esac
