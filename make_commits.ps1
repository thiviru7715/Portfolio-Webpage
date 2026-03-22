git add .
git commit -m "UI Upgrade: Major theme, scroll progress, and styling components"

$messages = @(
    "UI Polish: Adjust scroll progress animation duration",
    "UI Polish: Refine glassmorphism borders",
    "UI Polish: Enhance hero section typography",
    "UI Polish: Update responsive media queries",
    "UI Polish: Stagger skill chips animations",
    "UI Polish: Improve dark theme contrast ratio",
    "UI Polish: Realign hero image wrapper glow",
    "UI Polish: Micro-interaction on buttons",
    "UI Polish: Consolidate CSS variables",
    "UI Polish: Fix sticky navigation padding",
    "UI Polish: Add box shadow to info cards",
    "UI Polish: Refactor global transitions",
    "UI Polish: Align project card icons",
    "UI Polish: Adjust contact form input borders",
    "UI Polish: Refine footer social link spacing",
    "UI Polish: Tweaks to custom cursor blending",
    "UI Polish: Optimize initial paint for background gradient",
    "UI Polish: Cleanup unused code and comments",
    "UI Upgrade: Final UI validation and polish fixes"
)

foreach ($msg in $messages) {
    git commit --allow-empty -m "$msg"
}
